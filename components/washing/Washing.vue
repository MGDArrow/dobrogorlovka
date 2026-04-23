<template>
  <section class="washing">
    <WashingOrders :orders v-if="orders" />
    <button class="washing__get-order" @click="isOpenPopup = true">
      Забронировать время стирки
    </button>
    <UiPopup v-if="isOpenPopup" @close-popup="closePopup">
      <WashingSubmit
        v-if="submitting || submitResult"
        :submitting
        :submit-result
        @closePopup="closePopup()"
      />

      <form v-else @submit.prevent="submit" class="washing__form">
        <h4>Забронировать время стирки</h4>
        <UiStager :stages v-model="stage" style="margin: 20px auto" />
        <template v-if="stage === 'info'">
          <h5>Ознакомьтесь с важной информацей</h5>
          <WashingRules v-model="form.rulesConfirmed" />
        </template>
        <template v-if="stage === 'contacts'">
          <h5>Заполните информацию о себе</h5>
          <UiInput
            :label="'ФИО:'"
            v-model="form.name"
            :placeholder="'Введите ваше ФИО'"
          />
          <UiInputPhone
            :label="'Телефон:'"
            v-model="form.phone"
            :placeholder="'Введите ваш номер телефона'"
          />
        </template>
        <template v-if="stage === 'colors'">
          <h5>Выбирите необходимую категорию стирки</h5>
          <p style="text-align: center; font-size: 0.7em">
            Под каждую категорию стирки у нас отдельная стиральная машинка
          </p>
          <WashingColors v-model="form.colors" />
          <UiInput
            :label="'Комментарий'"
            v-model="form.comment"
            :placeholder="'Ваш комментарий, при необходимости'"
          />
        </template>
        <template v-if="stage === 'calendar'">
          <h5>Выбирите доступную дату и время</h5>

          <ClientOnly>
            <WashingCalendar v-model="dateForCalendar" />
            <template v-if="loading"
              ><div class="date__waiting">
                <UiSpinner /></div
            ></template>
            <template v-else-if="readyDates.length === 0">
              <div class="date__waiting">Нет подходящих дат на эту неделю</div>
            </template>
            <template v-else>
              <WashingDates
                :dates
                @setTimes="(e) => setDateIndex(e)"
                :currentIndex="dateIndex"
              />
              <WashingTimes
                :times
                :current-times="form.date"
                @setDateTimes="(e) => (form.date = e)"
              />
            </template>
          </ClientOnly>
        </template>
        <div class="buttons-flex">
          <UiButton
            :size="'min'"
            :color="'var(--color-orange)'"
            v-if="stage !== 'info'"
            @click="goNewStage(-1)"
            >Назад</UiButton
          >
          <UiButton
            :size="'min'"
            :color="'var(--color-blue)'"
            v-if="stage !== 'calendar'"
            @click="goNewStage(1)"
            >Далее</UiButton
          >
          <UiButton type="submit" :size="'min'" v-else>Забронировать</UiButton>
        </div>
        <ul class="errors" v-if="errors.length">
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </form>
    </UiPopup>
  </section>
</template>

<script setup lang="ts">
  import type { Dayjs } from 'dayjs';
  import type { TIcons, IWashingDate } from '~/types/types';

  interface ILocalOrder {
    number: string;
    date: string;
    colors: number[];
  }

  const orders: Ref<ILocalOrder[]> = ref([]);

  const isOpenPopup = ref(false);

  const form = reactive({
    name: '',
    phone: '+7',
    comment: '',
    colors: [] as number[],
    date: null as null | string,
    rulesConfirmed: false,
  });

  const dateForCalendar: Ref<Dayjs> = ref(initDaysj(new Date()));
  const weekForCalendar: ComputedRef<[Dayjs, Dayjs]> = computed(() =>
    getMondayAndSunday(dateForCalendar.value),
  );

  const errors = ref<Array<string>>([]);
  const loading = ref(false);
  const submitting = ref(false);
  const submitResult = ref<{
    success: boolean;
    orderNumber?: string;
    scheduledAt?: string;
    message?: string;
    colorsIDs?: number[];
    comment?: string;
  } | null>(null);

  const readyDates: Ref<IWashingDate[]> = ref([]);

  const dates = computed(() => {
    const sortedDates: {
      [key: string]: { date: Dayjs; times: IWashingDate[]; isFreeDay: boolean };
    } = {};
    readyDates.value.forEach((date) => {
      const day = getShortDate(date.date);
      if (!Object.hasOwn(sortedDates, day)) {
        sortedDates[day] = {
          date: initDaysj(date.date),
          times: [],
          isFreeDay: true,
        };
      }
      sortedDates[day].times.push(date);
    });
    for (const d in sortedDates) {
      sortedDates[d].isFreeDay = !!sortedDates[d].times.filter(
        (el) => el.isFree === true,
      ).length;
    }
    return Object.entries(sortedDates).sort(
      (a, b) => +a[0].split('/')[0] - +b[0].split('/')[0],
    );
  });

  const dateIndex: Ref<null | number> = ref(null);

  const times = computed(() =>
    dateIndex.value !== null ? dates.value[dateIndex.value][1].times : [],
  );

  function setDateIndex(index: number) {
    dateIndex.value = index;
    form.date = null;
  }

  const stages: { name: string; icon: TIcons }[] = [
    { icon: 'info', name: 'Правила' },
    { icon: 'contacts', name: 'Контакты' },
    { icon: 'colors', name: 'Бельё' },
    { icon: 'calendar', name: 'Дата' },
  ];

  const stage = ref<TIcons>('info');

  function addError(error: string) {
    if (errors.value.findIndex((err) => err === error) === -1)
      errors.value.push(error);
  }

  function removeError(error: string) {
    errors.value = errors.value.filter((el) => el !== error);
  }

  function goNewStage(inc: 1 | -1) {
    const currentStageNumber = stages.findIndex(
      (el) => el.icon === stage.value,
    );
    stage.value = stages[currentStageNumber + inc].icon;
  }

  watch(stage, (newVal) => {
    let currentId = newVal;
    const newId = stages.findIndex((el) => el.icon === newVal);

    if (newId >= 3) {
      if (form.colors.length === 0) {
        addError('Виберите тип/типы стирки');
        currentId = stages[2].icon;
      }
      form.date === null;
      dateIndex.value = null;
    }
    if (newId >= 2) {
      if (form.name.length < 2) {
        addError('Заполните ФИО');
        currentId = stages[1].icon;
      }
      if (form.phone.length !== 18) {
        addError('Заполните телефон');
        currentId = stages[1].icon;
      }
    }
    if (newId >= 1) {
      if (!form.rulesConfirmed) {
        addError('Прочитайте и подтвердите правила');
        currentId = stages[0].icon;
      }
    }

    if (newId === 3 && currentId === newVal) {
      getDatesTimesForWashing();
    }

    stage.value = currentId;
  });
  watch(
    () => form.rulesConfirmed,
    () => {
      removeError('Прочитайте и подтвердите правила');
    },
  );
  watch(
    () => form.name,
    () => {
      removeError('Заполните ФИО');
    },
  );
  watch(
    () => form.phone,
    () => {
      removeError('Заполните телефон');
    },
  );
  watch(
    () => form.colors,
    () => {
      removeError('Виберите тип/типы стирки');
    },
  );
  watch(dateForCalendar, (newVal, oldVal) => {
    if (isBeforeCurrent(newVal)) {
      if (oldVal && isCurrentWeek(oldVal)) dateForCalendar.value = oldVal;
      else dateForCalendar.value = initDaysj(new Date());
    }
  });
  watch(weekForCalendar, async (newVal, oldVal) => {
    if (newVal.toString() !== oldVal.toString()) {
      await getDatesTimesForWashing();
    }
    dateIndex.value = null;
    form.date = null;
  });

  const abortController = ref<AbortController | null>(null);

  async function getDatesTimesForWashing() {
    // Отменяем предыдущий запрос
    if (abortController.value) {
      abortController.value.abort();
    }

    abortController.value = new AbortController();
    const signal = abortController.value.signal;

    loading.value = true;
    try {
      const data = await $fetch('/api/schedule', {
        method: 'GET',
        query: {
          ...getDateForQuerryGet(weekForCalendar.value),
          washTypeIdsParam: form.colors.toString(),
        },
        signal,
      });
      readyDates.value = data;
    } catch (err: any) {
      if (err.name === 'AbortError') return;
      console.error('Ошибка загрузки расписания', err);
    } finally {
      loading.value = false;
    }
  }

  async function submit() {
    // Валидация перед отправкой
    if (form.colors.length === 0) return addError('Выберите тип/типы стирки');
    if (form.name.length < 2) return addError('Заполните ФИО');
    if (form.phone.length !== 18) return addError('Заполните телефон');
    if (!form.rulesConfirmed)
      return addError('Прочитайте и подтвердите правила');
    if (form.date === null) return addError('Выберите дату и время стирки');

    // Очищаем предыдущий результат и включаем режим отправки
    submitResult.value = null;
    submitting.value = true;

    try {
      const response = await $fetch('/api/order', {
        method: 'POST',
        body: {
          name: form.name,
          phone: form.phone,
          colors: form.colors,
          date: form.date,
          rulesConfirmed: form.rulesConfirmed,
          comment: form.comment,
        },
      });

      submitResult.value = {
        success: true,
        orderNumber: response.orderNumber,
        scheduledAt: response.scheduledAt,
        message: response.message,
        comment: form.comment,
        colorsIDs: form.colors,
      };

      addToLocalStorage(submitResult.value.orderNumber, form.colors, form.date);

      form.name = '';
      form.phone = '+7';
      form.comment = '';
      form.colors = [];
      form.date = null;
      form.rulesConfirmed = false;
      stage.value = 'info';
      dateForCalendar.value = initDaysj(new Date());

      // TODO Добавить в локал сторедж
    } catch (error: any) {
      let errorMessage = 'Произошла ошибка при бронировании';
      if (error.data?.message) errorMessage = error.data.message;
      else if (error.message) errorMessage = error.message;

      submitResult.value = {
        success: false,
        message: errorMessage,
      };
    } finally {
      submitting.value = false;
    }
  }

  function closePopup() {
    isOpenPopup.value = false;
    submitting.value = false;
    submitResult.value = null;
    errors.value = [];
    stage.value = 'info';
  }

  function addToLocalStorage(
    number: string | undefined,
    colors: number[],
    date: string,
  ) {
    if (!number) return;

    const local = window.localStorage.getItem('washing-orders');
    const order = { number, date, colors };

    if (!local) {
      window.localStorage.setItem('washing-orders', JSON.stringify([order]));
    } else {
      const array = JSON.parse(local);
      window.localStorage.setItem(
        'washing-orders',
        JSON.stringify([...array, order]),
      );
    }
    updateOrders();
  }

  function updateOrders() {
    const local = window.localStorage.getItem('washing-orders');
    if (local) orders.value = JSON.parse(local);
  }

  onMounted(() => {
    updateOrders();
  });
</script>

<style scoped lang="scss">
  .washing {
    width: 100%;
    &__get-order {
      background: var(--color-white);
      border: 8px solid var(--color-black);
      border-radius: var(--border-radius);
      padding: 20px;
      font-size: 2.5em;
      font-weight: 600;
      margin: 10px auto;
      display: block;
      text-transform: uppercase;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      @media screen and (max-width: 1599px) {
        font-size: 2.2em;
      }
      @media screen and (max-width: 1199px) {
        max-width: 80%;
        font-size: 2.2em;
      }
      @media screen and (max-width: 768px) {
        max-width: 90%;
        font-size: 1.6em;
        border-width: 6px;
        margin: 60px auto;
      }
      &:hover {
        background: v-bind(getRandomColor());
        color: var(--color-white);
      }
    }
    &__form {
      display: block;
      & h4 {
        text-align: center;
        width: auto;
        font-weight: 600;
        font-size: 1.6em;
        text-transform: uppercase;
      }
    }
  }

  .buttons-flex {
    display: flex;
    gap: 1em;
  }

  .errors {
    color: var(--color-red);
    font-size: 0.8em;
  }

  .date__waiting {
    padding: 10px;
    text-align: center;
    border: 3px solid var(--color-black);
    border-radius: var(--border-radius);
    margin: 20px 0;
    line-height: 2em;
    font-size: 1.2em;
  }
</style>
