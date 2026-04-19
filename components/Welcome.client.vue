<template>
  <div>
    <div class="pwa" v-if="pwaPopup">
      <div class="pwa__title">Установить приложение ДоброГорловки?</div>
      <div class="pwa__info">
        Вы можете установить наше приложение, для того, чтобы не пропускать
        основные новости и всегда сделить за нашими делами
      </div>
      <div class="pwa__btns">
        <UiButton
          :size="'min'"
          :color="'var(--color-red)'"
          @click="pwaPopup = false"
        >
          Нет
        </UiButton>
        <UiButton
          :size="'min'"
          :color="'var(--color-green)'"
          @click="installPWA()"
        >
          Да
        </UiButton>
      </div>
    </div>
    <Teleport to="body">
      <UiPopup v-if="isVisible" @close-popup="isVisible = false">
        <div class="welcome">
          <div class="welcome__line-2"></div>
          <div class="welcome__line"></div>
          <div class="welcome__content">
            <p class="welcome__title">Рады привествовать у нас на сайте!</p>
            <p class="welcome__purpose">
              Мы работаем для того, чтобы сделать лучше жизнь людей, которым
              требуется помощь и поддержка
            </p>
            <div class="welcome__invite">
              <span> Присоединяйся к нашему движению: </span>
              <ul>
                <li>
                  👉 <strong>Делись нашими постами</strong> — пусть о добрых
                  делах узнает больше людей.
                </li>
                <li>
                  👉 <strong>Стань волонтёром</strong> — иногда для важных
                  перемен нужны просто ваши руки и доброе сердце.
                </li>
              </ul>
            </div>

            <div class="welcome__button">
              <div
                class="welcome__button-layer-1"
                @click="isVisible = false"
                :class="{ active: isActive }"
              >
                <div
                  class="welcome__button-layer-2"
                  :class="{ active: isActive }"
                >
                  <button type="button" @mouseover="isActive = true">
                    Далее
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UiPopup>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
  const isVisible = ref(false);
  const isActive = ref(false);

  function getTwoWeek() {
    const dateNow = new Date();
    const dateAdd = new Date(
      dateNow.getFullYear(),
      dateNow.getMonth(),
      dateNow.getDate() + 14,
    ).getTime();
    return dateAdd;
  }

  const pwaPopup = ref(false);
  let installPrompt: Event | null = null;

  async function installPWA() {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    installPrompt = null;
  }

  onMounted(() => {
    const local = window.localStorage.getItem('welcome');
    if (!local) {
      window.localStorage.setItem('welcome', getTwoWeek().toString());
      isVisible.value = true;
    } else {
      if (new Date().getTime() > +local) {
        window.localStorage.setItem('welcome', getTwoWeek().toString());
        isVisible.value = true;
      }
    }
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      pwaPopup.value = true;
      installPrompt = event;
    });
  });
</script>

<style scoped lang="scss">
  .welcome {
    max-width: 800px;
    &__line {
      position: relative;
      width: 872px;
      height: 35px;
      margin: 10px -40px 30px;
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      background-size: 200% 200%;
      background-position: 100% 0;
      background-image: linear-gradient(
        to right,
        var(--color-orange) 50%,
        var(--color-white) 50%
      );
      transition: 1.2s ease-in-out;
      animation: 3s test;
      animation-fill-mode: forwards;
    }
    &__line-2 {
      position: absolute;
      top: -20px;
      right: 15px;
      width: 35px;
      height: 500px;
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      background-size: 200% 200%;
      background-position: 100% 100%;
      background-image: linear-gradient(
        to bottom,
        var(--color-pink) 50%,
        var(--color-white) 50%
      );
      transition: 1.2s ease-in-out;
      animation: 3s test;
      animation-fill-mode: forwards;
    }
    @keyframes test {
      to {
        background-position: 0 0;
      }
    }
    &__content {
      margin-right: 40px;
    }

    &__title {
      display: block;
      font-size: 1.5em;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
    }

    &__purpose {
      display: block;
      text-align: center;
      margin: 20px 0;
    }

    &__invite {
      margin: 10px auto;
      width: 90%;
      font-size: 1.1em;
      & span {
        display: block;
        font-size: 1.1em;
        font-weight: 600;
      }
      & strong {
        font-weight: 500;
      }
      & li {
        margin: 5px 10px 0px;
        text-align: justify;
        transition: 0.2s ease-in-out;
        &:hover {
          transform: scale(1.03);
          &:nth-child(1n) {
            color: var(--color-blue);
          }
          &:nth-child(2n) {
            color: var(--color-orange);
          }
        }
      }
    }

    &__button {
      --height: 45px;
      --width: 250px;
      margin: 10px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc((var(--height) * 1.5 + 4px) * 1.5 + 4px);
      width: calc(var(--width) + var(--height) * 1.5 + 8px);
      &-layer-1 {
        width: 0;
        height: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-black);
        border-radius: var(--border-radius);
        transition: 0.5s ease-in-out;
        &.active {
          height: calc((var(--height) * 1.5 + 4px) * 1.5 + 4px);
          width: calc(var(--width) + var(--height) * 1.5 + 8px);
          background: var(--color-blue);
        }
        &:hover {
          transform: scale(1.04);
        }
      }
      &-layer-2 {
        width: 0;
        height: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--color-black);
        border-radius: var(--border-radius);
        transition: 0.5s ease-in-out;
        &.active {
          height: calc(var(--height) * 1.5 + 4px);
          width: calc(var(--width) + var(--height) * 0.5 + 4px);
          background: var(--color-green);
        }
      }
      & button {
        text-transform: uppercase;
        font-size: 1.3em;
        cursor: pointer;
        padding: 0 40px;
        font-weight: 500;
        width: var(--width);
        height: var(--height);
        background: var(--color-white);
        border: 2px solid var(--color-black);
        border-radius: var(--border-radius);
      }
    }
  }

  .pwa {
    box-sizing: border-box;
    width: 90vw;
    min-width: 350px;
    max-width: 1650px;
    position: fixed;
    bottom: 20px;
    // min-height: 10dvh;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--border-radius);
    z-index: 998;
    padding: 20px;
    background: var(--color-white);
    border: 4px solid var(--color-blue);
    animation: kf-open 1s forwards ease-in-out;
    &__title {
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;
      border-radius: var(--border-radius);
      color: var(--color-blue);
      font-weight: 600;
      font-size: 1.4em;
      @media (width <= 768px) {
        font-size: 1.1em;
      }
    }
    &__info {
      margin-top: 10px;
    }
    &__btns {
      width: 40%;
      margin: 0 auto;
      display: flex;
      gap: 20px;
      @media (width <= 768px) {
        width: 100%;
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
