<template>
  <div class="pulse-anons" v-if="anonses.length && isVisible">
    <div class="pulse-anons__date">
      {{ getDateForAnonse(anons.dateStart, anons.dateEnd) }}
    </div>
    <div class="pulse-anons__info">
      <div class="pulse-anons__anonse">
        <div class="pulse-anons__icon">
          <UiIcon :name="'blood'" :size="'3em'" />
        </div>
        <div class="pulse-anons__text">
          <p v-for="(text, index) in anons.text" :key="index">{{ text }}</p>
        </div>
      </div>
      <div class="pulse-anons__contacts">
        <UiStrong>Присоединиться к акции или задать вопросы</UiStrong>, можно у
        координатора — клирика Богоявленского кафедрального собора,
        <UiStrong>диакона Романа Шуклина</UiStrong>:
        <a href="tel:+79495077156">+7 (949) 507-71-56 (TG).</a>
      </div>
    </div>
    <div class="pulse-anons__btns">
      <div class="pulse-anons__pagination">
        <div
          v-for="n in anonses.length"
          @click="anonseID = n - 1"
          :class="{ active: n - 1 === anonseID }"
        />
      </div>
      <div class="pulse-anons__btn" @click="isVisible = false">Понятно</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PULSE } from '~/content/pulse.project';

  const anonses = PULSE.anonses.filter((anons) => anons.dateEnd >= new Date());

  const anonseID = ref(0);

  const anons = computed(() => anonses[anonseID.value]);

  const isVisible = ref(false);

  function getOneDay() {
    const dateNow = new Date();
    const dateAdd = new Date(
      dateNow.getFullYear(),
      dateNow.getMonth(),
      dateNow.getDate() + 1,
    ).getTime();
    return dateAdd;
  }

  onMounted(() => {
    const local = window.localStorage.getItem('pulse-anonse');
    if (!local) {
      window.localStorage.setItem('pulse-anonse', getOneDay().toString());
      isVisible.value = true;
    } else {
      if (new Date().getTime() > +local) {
        window.localStorage.setItem('pulse-anonse', getOneDay().toString());
        isVisible.value = true;
      }
    }
    if (anonses.length === 0) window.localStorage.removeItem('pulse-anonse');
  });
</script>

<style scoped lang="scss">
  .pulse-anons {
    box-sizing: border-box;
    width: 90vw;
    min-width: 350px;
    max-width: 1650px;
    position: fixed;
    bottom: 20px;
    // max-height: 80dvh;
    min-height: 10dvh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--border-radius);
    z-index: 998;
    padding: 20px;
    background: var(--color-white);
    border: 4px solid var(--color-red);
    animation: kf-open 1s forwards ease-in-out;
    &__date {
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;
      border-radius: var(--border-radius);
      color: var(--color-red);
      font-weight: 600;
      font-size: 1.4em;
      @media (width <= 768px) {
        font-size: 1.1em;
      }
    }
    &__info {
      margin-top: 10px;
    }
    &__anonse {
      display: flex;
      gap: 20px;
      align-items: center;
      & p {
        text-indent: 1em;
        text-align: justify;
        line-height: 1.15em;
      }
      @media (width <= 768px) {
        flex-direction: column;
        gap: 0;
        font-size: 0.9em;
      }
    }
    &__icon {
      color: var(--color-red);
      font-size: 1.2em;
    }
    &__contacts {
      margin-top: 10px;
      font-size: 0.9em;
      text-align: center;
      font-style: italic;
      text-wrap: balance;
      & a {
        display: block;
        text-decoration: none;
        font-style: normal;
        font-size: 1.1em;
        color: var(--color-black);
        font-weight: 500;
      }
      @media (width <= 768px) {
        font-size: 0.8em;
      }
    }
    &__btns {
      width: 40%;
      margin: 20px auto 0;
      display: flex;
      gap: 20px;
      @media (width <= 768px) {
        width: 100%;
      }
    }
    &__pagination {
      flex: 1;
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      & div {
        content: ' ';
        width: 0.75em;
        aspect-ratio: 1/1;
        border-radius: 100%;
        background: var(--color-black);
        cursor: pointer;
        transition: 0.1s ease-in-out;
        &.active {
          background: var(--color-red);
        }
      }
    }
    &__btn {
      flex: 1;
      text-align: center;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--color-red);
      cursor: pointer;
    }
  }

  @keyframes kf-open {
    0% {
      bottom: -200dvh;
    }
    100% {
      bottom: 20px;
    }
  }
</style>
