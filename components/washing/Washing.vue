<template>
  <section class="washing">
    <button class="washing__get-order" @click="isOpenPopup = true">
      Забронировать время стирки
    </button>
    <UiPopup v-if="isOpenPopup" @close-popup="isOpenPopup = false">
      <form action="" class="washing__form">
        <h4>Забронировать время стирки</h4>
        <UiStager :stages v-model="stage" style="margin: 20px auto" />
        <template v-if="stage === 'info'">
          <h5>Ознакомьтесь с важной информацей</h5>
          <p>Информация</p>
        </template>
        <template v-if="stage === 'contacts'">
          <h5>Заполните информацию о себе</h5>
          <UiInput
            :label="'ФИО:'"
            v-model="form.name"
            :placeholder="'Введите ваше ФИО'"
          />
          <UiInput
            :label="'Телефон:'"
            v-model="form.phone"
            :placeholder="'Введите ваш номер телефона'"
          />
        </template>
        <template v-if="stage === 'colors'">
          <h5>Выбирите необходимую категорию стирки</h5>
          <WashingColors />
        </template>
        <template v-if="stage === 'calendar'">
          <h5>Выбирите доступную дату и время</h5>
          <ClientOnly>
            <WashingCalendar v-model="form.date" />
            <WashingDates v-model="form.date" :dates />
            <WashingTimes v-model="form.date" v-if="isCurrentDate" />
          </ClientOnly>
        </template>
        <UiButton>Забронировать</UiButton>
      </form>
    </UiPopup>
  </section>
</template>

<script setup lang="ts">
  import type { TIcons } from '~/types/types';

  const isOpenPopup = ref(false);

  const form = reactive({
    name: '',
    phone: '',
    date: initDaysj(new Date()),
  });

  const dates = computed(() => getDatesInWeek(form.date));

  const isCurrentDate = computed(() => {
    const array = dates.value.filter((date) =>
      isDateCurrent(date, form.date),
    ).length;

    return !!array;
  });

  const stages: { name: string; icon: TIcons }[] = [
    { icon: 'info', name: 'Правила' },
    { icon: 'contacts', name: 'Контакты' },
    { icon: 'colors', name: 'Бельё' },
    { icon: 'calendar', name: 'Дата' },
  ];

  const stage = ref<TIcons>('calendar');
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
</style>
