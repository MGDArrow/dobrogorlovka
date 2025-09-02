<template>
  <div class="popup">
    <div class="popup__bg" @click="emit('closePopup')"></div>
    <div class="popup__body">
      <div class="popup__close" @click="emit('closePopup')">Закрыть</div>

      <div class="popup__arrow-left" v-if="arrowLeft" @click="emit('left')">
        ←
      </div>
      <slot />
      <div class="popup__arrow-right" v-if="arrowRight" @click="emit('right')">
        →
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    arrowLeft?: boolean;
    arrowRight?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    arrowLeft: false,
    arrowRight: false,
  });

  defineSlots<{
    default: string;
  }>();

  const emit = defineEmits<{
    closePopup: [];
    left: [];
    right: [];
  }>();

  function closePostEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') emit('closePopup');
    if (props.arrowLeft && event.key === 'ArrowLeft') emit('left');
    if (props.arrowRight && event.key === 'ArrowRight') emit('right');
  }

  onMounted(() => {
    const url = new URL(window.location.href);
    useRouter().push({ hash: url.hash, query: { popup: 'true' } });

    document.addEventListener('keydown', (e) => closePostEscape(e));
    addEventListener('popstate', () => emit('closePopup'));
  });
  onUnmounted(() => {
    const url = new URL(window.location.href);
    useRouter().push({ hash: url.hash });

    document.removeEventListener('keydown', (e) => closePostEscape(e));
    removeEventListener('popstate', () => emit('closePopup'));
  });
</script>

<style scoped lang="scss">
  .popup {
    width: 100vw;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    &__bg {
      width: 100%;
      height: 100%;
      background: var(--color-white);
      opacity: 0.7;
    }
    &__body {
      max-width: 90vw;
      padding: 20px;
      border: 4px solid var(--color-black);
      border-radius: var(--border-radius);
      background: var(--color-white);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      @media screen and (max-width: 768px) {
        width: calc(100vw - 28px);
        border-radius: unset;
        max-width: 100vw;
        height: calc(100dvh - 58px);
        padding: 40px 10px 10px;
        top: 0;
        left: 0;
        transform: unset;
        overflow-y: auto;
      }
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-track {
        background: var(--color-black);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-white);
        border-radius: 15px;
      }
    }
    &__close {
      display: none;
      @media screen and (max-width: 768px) {
        height: 30px;
        background-color: lightgrey;
        opacity: 0.8;
        position: fixed;
        z-index: 11;
        top: 4px;
        left: 4px;
        width: calc(100vw - 8px);
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    &__arrow {
      &-left,
      &-right {
        position: absolute;
        top: 50%;
        left: 25px;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 1.2em;
        background: var(--color-white);
        border: 2px solid var(--color-black);
        border-radius: 8px;
        cursor: pointer;
        opacity: 0.3;
        transition: 0.3s ease-in-out;
        &:hover {
          opacity: 1;
        }
      }
      &-right {
        left: auto;
        right: 25px;
      }
    }
  }
</style>
