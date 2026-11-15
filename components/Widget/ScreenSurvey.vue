<template>
  <section v-if="!submitted || justSubmitted" id="survey">
    <div v-if="justSubmitted" class="survey__thanks">
      <h2>Спасибо за отзыв!</h2>
      <p>Мы ценим ваше мнение.</p>
    </div>

    <template v-else>
      <h2>Оцените проект</h2>
      <div class="survey__wrapper">
        <div class="survey__stars" :class="{ disabled: idSurvey }">
          <UiIcon
            :size="'3.5em'"
            v-for="i in 10"
            :key="i"
            @mouseover="!idSurvey && (hoverStar = i)"
            @mouseleave="!idSurvey && (hoverStar = 0)"
            @click="!idSurvey && (selectStar = i)"
            :name="`${selectStar >= i ? 'star-solid' : 'star-regular'}`"
            :class="`${i <= hoverStar || i <= selectStar ? starColor : ''}`"
          />
        </div>
        <div class="survey__buttons" :class="{ disabled: idSurvey }">
          <UiButton
            :size="'min'"
            :color="'var(--color-red)'"
            @click="selectStar = 0"
            :disabled="!!idSurvey"
          >
            Отмена
          </UiButton>
          <UiButton
            :size="'min'"
            :color="'var(--color-green)'"
            :disabled="selectStar == 0 || !!idSurvey"
            @click="sendSurvey()"
          >
            Принять
          </UiButton>
        </div>
        <div class="survey__line"></div>
        <div class="survey__form" :class="{ disabled: !idSurvey }">
          <div class="survey__main">
            <UiTextarea
              v-model="form.text"
              :placeholder="'Оставьте ваш отзыв или пожелания'"
              :disabled="!idSurvey"
            />
            <UiCheckboxGroupe
              v-model="form.help"
              :title="'Ролики помогли вам:'"
              :values="[
                'Задуматься о важных вещах',
                'Снизить тревожность, почувствовать спокойствие',
                'Получить практический совет',
                'Поддержали в трудную минуту',
                'Затрудняюсь ответить',
                'Никак не помогли',
              ]"
              :disabled="!idSurvey"
            />
          </div>
          <div class="survey__persona">
            <UiCheckbox v-model="isAnon">Анонимно</UiCheckbox>
            <UiInput
              v-model="form.name"
              :label="'Ваше имя:'"
              :placeholder="'Ваше имя'"
              :disabled="isAnon"
              :class="{ disabled: isAnon }"
            />

            <UiRadio
              v-model="form.sex"
              :title="'Ваш пол:'"
              :values="['Мужской', 'Женский']"
              :disabled="isAnon"
              :class="{ disabled: isAnon }"
            />
            <UiRadio
              v-model="form.old"
              :title="'Ваш возраст:'"
              :values="['до 18', '18-25', '26-40', '41-60', '60+']"
              :disabled="isAnon"
              :class="{ disabled: isAnon }"
            />
            <UiRadio
              v-model="form.work"
              :title="'Ваша занятость:'"
              :values="[
                'Школьник / студент',
                'Работающий',
                'Временно не работаю',
                'Пенсионер',
                'Другое',
              ]"
              :disabled="isAnon"
              :class="{ disabled: isAnon }"
            />
          </div>
        </div>
        <div class="survey__buttons" :class="{ disabled: !idSurvey }">
          <UiButton
            :size="'min'"
            :color="'var(--color-red)'"
            @click="clearForm()"
            :disabled="!idSurvey"
          >
            Отмена
          </UiButton>
          <UiButton
            :size="'min'"
            :color="'var(--color-green)'"
            :disabled="
              !idSurvey || (form.text === '' && form.help.length === 0)
            "
            @click="sendDetails()"
          >
            Отправить
          </UiButton>
        </div>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
  const hoverStar = ref(0);
  const selectStar = ref(0);
  const idSurvey = ref<number | null>(null);
  const isAnon = ref(true);
  const sending = ref(false);

  const submitted = ref(false);
  const justSubmitted = ref(false);

  const starColor = computed(() => {
    return hoverStar.value >= 9 || selectStar.value >= 9
      ? 'green'
      : hoverStar.value >= 6 || selectStar.value >= 6
        ? 'orange'
        : hoverStar.value >= 3 || selectStar.value >= 3
          ? 'pink'
          : hoverStar.value >= 1 || selectStar.value >= 1
            ? 'red'
            : '';
  });

  const form = reactive({
    text: '',
    help: [] as string[],
    name: '',
    sex: '',
    old: '',
    work: '',
  });

  // ----- localStorage helpers -----
  function getLocalSurvey(): number {
    if (!import.meta.client) return 0;
    const survey = localStorage.getItem('screenOfGoodnes-survey');
    if (!survey) localStorage.setItem('screenOfGoodnes-survey', '0');
    return survey ? Number(survey) : 0;
  }

  function getLocalSurveyId(): number | null {
    if (!import.meta.client) return null;
    const raw = localStorage.getItem('screenOfGoodnes-survey-id');
    const parsed = raw ? Number(raw) : NaN;
    return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
  }

  function clearForm() {
    form.text = '';
    form.help = [];
    form.name = '';
    form.sex = '';
    form.old = '';
    form.work = '';
  }

  function clearSurveyStorage() {
    localStorage.removeItem('screenOfGoodnes-survey');
    localStorage.removeItem('screenOfGoodnes-survey-id');
    localStorage.removeItem('screenOfGoodnes-survey-submitted');
  }

  function resetAfterDeletion() {
    clearSurveyStorage();
    idSurvey.value = null;
    selectStar.value = 0;
    submitted.value = false;
    justSubmitted.value = false;
    clearForm();
  }

  // ----- отправка оценки (создаёт запись, получает id) -----
  async function sendSurvey() {
    if (selectStar.value === 0 || idSurvey.value || sending.value) return;
    sending.value = true;
    try {
      const { id } = await $fetch<{ id: number }>('/api/screen/surveys', {
        method: 'POST',
        body: { rating: selectStar.value },
      });
      idSurvey.value = id;
      localStorage.setItem('screenOfGoodnes-survey', String(selectStar.value));
      localStorage.setItem('screenOfGoodnes-survey-id', String(id));
    } catch (err) {
      console.error('Не удалось сохранить оценку', err);
    } finally {
      sending.value = false;
    }
  }

  async function sendDetails() {
    if (!idSurvey.value || sending.value) return;
    if (form.text === '' && form.help.length === 0) return;

    sending.value = true;
    try {
      await $fetch(`/api/screen/surveys/${idSurvey.value}`, {
        method: 'PATCH',
        body: {
          text: form.text,
          help: form.help,
          isAnonymous: isAnon.value,
          name: isAnon.value ? null : form.name,
          sex: isAnon.value ? null : form.sex,
          age: isAnon.value ? null : form.old,
          employment: isAnon.value ? null : form.work,
        },
      });

      localStorage.setItem('screenOfGoodnes-survey-submitted', '1');
      submitted.value = true;
      justSubmitted.value = true;
    } catch (err: any) {
      const status = err?.statusCode ?? err?.response?.status;
      if (status === 404) {
        resetAfterDeletion();
        return;
      }
      console.error('Не удалось сохранить отзыв', err);
    } finally {
      sending.value = false;
    }
  }

  onMounted(async () => {
    selectStar.value = getLocalSurvey();
    idSurvey.value = getLocalSurveyId();
    const wasSubmitted =
      localStorage.getItem('screenOfGoodnes-survey-submitted') === '1';

    // Совсем нет id, но флаг отправки остался — странное состояние, просто скроем блок
    if (!idSurvey.value) {
      if (wasSubmitted) submitted.value = true;
      return;
    }

    try {
      const data = await $fetch<{
        rating: number;
        text: string | null;
        help: string[];
        isAnonymous: boolean;
        name: string | null;
        sex: string | null;
        age: string | null;
        employment: string | null;
      }>(`/api/screen/surveys/${idSurvey.value}`);

      // запись на месте — если её уже отправляли, просто скрываем блок
      if (wasSubmitted) {
        submitted.value = true;
        return;
      }

      // запись на месте, но ещё не отправляли — восстанавливаем поля
      selectStar.value = data.rating;
      form.text = data.text ?? '';
      form.help = data.help ?? [];
      isAnon.value = data.isAnonymous;
      form.name = data.name ?? '';
      form.sex = data.sex ?? '';
      form.old = data.age ?? '';
      form.work = data.employment ?? '';
    } catch (err: any) {
      const status = err?.statusCode ?? err?.response?.status;
      if (status === 404) {
        // админ удалил запись — сбрасываем всё, форма снова доступна
        resetAfterDeletion();
      }
      idSurvey.value = null;
      localStorage.removeItem('screenOfGoodnes-survey-id');
    }
  });

  // ----- прежние вотчеры -----
  watch(isAnon, (newVal, oldVal) => {
    if (!newVal) {
      if (!idSurvey.value) isAnon.value = oldVal;
    }
    if (newVal === true) {
      form.name = '';
      form.sex = '';
      form.old = '';
      form.work = '';
    }
  });

  watch(
    () => form.help,
    (newVal) => {
      if (newVal.length > 1 && newVal.includes('Затрудняюсь ответить')) {
        form.help = ['Затрудняюсь ответить'];
      } else if (newVal.length > 1 && newVal.includes('Никак не помогли')) {
        form.help = ['Никак не помогли'];
      }
    },
    { deep: true },
  );
</script>

<style scoped lang="scss">
  .survey {
    &__thanks {
      text-align: center;
      padding: 40px 20px;
      margin: 20px auto;
      max-width: 600px;
      border: 4px solid var(--color-green);
      border-radius: var(--border-radius);

      h2 {
        margin: 0 0 10px;
      }

      @media (width <= 768px) {
        border: 0;
        // padding: 20px 0;
      }
    }
    &__wrapper {
      border: 4px solid var(--color-black);
      box-sizing: border-box;
      margin: 20px auto;
      width: 100%;
      padding: 10px 30px;
      border-radius: var(--border-radius);
      @media screen and (max-width: 768px) {
        padding: 5px 0;
        border: 0;
        position: relative;
        margin: 5px auto;
      }
    }
    &__stars {
      display: flex;
      justify-content: center;
      gap: 0.5em;
      & svg {
        cursor: pointer;
        transition: 0.3s ease-out;
        &.red {
          color: var(--color-red);
        }
        &.pink {
          color: var(--color-pink);
        }
        &.orange {
          color: var(--color-orange);
        }
        &.green {
          color: var(--color-green);
        }
      }
      @media (width <= 768px) {
        gap: 0.1em;
      }
    }
    &__buttons {
      width: 40%;
      margin: 10px auto;
      display: flex;
      gap: 3em;
      transition: 0.3s ease-in-out;
      @media (width <= 1199px) {
        width: 100%;
      }
      @media (width <= 1199px) {
        margin: 5px auto;
      }
      @media (width <= 768px) {
        gap: 1em;
      }
    }
    &__line {
      height: 4px;
      width: 90%;
      margin: 10px auto;
      background: var(--color-black);
      border-radius: var(--border-radius);
      @media (width <= 1199px) {
        margin: 5px auto;
      }
    }
    &__form {
      display: flex;
      width: 100%;
      margin: 0 auto;
      gap: 20px;
      align-items: stretch;
      font-size: 0.7em;
      transition: 0.3s ease-in-out;
      & :deep(.ui-input),
      & :deep(.ui-checkbox),
      & :deep(.ui-checkbox-groupe),
      & :deep(.ui-radio) {
        margin: 10px 0;
      }
      & :deep(.ui-textarea) {
        margin: 10px 0 40px;
        flex: 1;
        @media (width <= 1199px) {
          margin: 10px 0;
        }
      }
      @media (width <= 1199px) {
        flex-direction: column;
        gap: 0;
      }
    }
    &__main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    &__persona {
      width: 40%;
      @media (width <= 1199px) {
        width: 100%;
      }
    }
  }

  .disabled {
    opacity: 0.5;
  }
</style>
