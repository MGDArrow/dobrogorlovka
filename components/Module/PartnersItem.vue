<template>
  <div class="item__wrapper" :class="{ active: isActive }" ref="activeRef">
    <div
      class="item__body"
      @mouseover="isHovered = true"
      :class="{ active: isActive }"
    >
      <NuxtImg :src="photoSrc" alt="Фото" :class="{ active: isActive }" />
      <p :class="{ active: isActive }" v-if="$slots.default">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  interface Props {
    photoSrc: string;
  }
  const props = defineProps<Props>();

  const isHovered = ref(false);
  const isMobile = ref(false);

  const { parentRef, isParentVisible } = inject<{
    parentRef: Ref<HTMLElement | null>;
    isParentVisible: Ref<boolean>;
  }>('parentRef', {
    parentRef: ref(null),
    isParentVisible: ref(false),
  });

  const activeRef = useTemplateRef<HTMLDivElement>('activeRef');

  const isItemVisible = ref(false);
  let itemObserver: IntersectionObserver | null = null;

  let resizeHandler: (() => void) | null = null;

  onMounted(() => {
    resizeHandler = () => {
      isMobile.value = window.innerWidth <= 768;
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    if (!activeRef.value || !parentRef.value) return;

    itemObserver = new IntersectionObserver(
      ([entry]) => {
        isItemVisible.value = entry.isIntersecting;
      },
      {
        root: parentRef.value,
        threshold: [0, 0.45],
      },
    );
    itemObserver.observe(activeRef.value);
  });

  onUnmounted(() => {
    itemObserver?.disconnect();
    if (resizeHandler) {
      window.removeEventListener('resize', resizeHandler);
    }
  });

  const isActive = computed(() => {
    if (isHovered.value) return true;
    if (!isMobile.value) return false;
    return isParentVisible.value && isItemVisible.value;
  });
</script>

<style scoped lang="scss">
  .item__wrapper {
    box-sizing: border-box;
    --angle: 0deg;
    width: 300px;
    height: 300px;
    border: 4px solid var(--color-black);
    border-radius: var(--border-radius);
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    background-image: conic-gradient(
      v-bind(getRandomColor()) var(--angle),
      var(--color-white) var(--angle) 360deg
    );
    margin: 0 30px;
    transition:
      margin 0.3s ease-in-out,
      width 0.3s ease-in-out,
      height 0.3s ease-in-out;
    @media screen and (max-width: 1199px) {
      margin: 0 20px;
      height: 200px;
      width: 200px;
    }
    @media screen and (max-width: 768px) {
      margin: 0;
      height: 250px;
      width: 250px;
    }
  }
  .item__wrapper.active {
    animation: 0.4s rotate linear;
    animation-fill-mode: forwards;
    height: 480px;
    width: 360px;
    margin: 0;
    @media screen and (max-width: 1199px) {
      height: 370px;
      width: 240px;
    }
    @media screen and (max-width: 768px) {
      height: 330px;
      width: 310px;
    }
  }

  .item__body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: var(--border-radius);
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition:
      width 0.3s ease-in-out,
      min-height 0.3s ease-in-out;
    &.active {
      border: 4px solid var(--color-black);
      width: calc(100% - 50px);
      height: auto;
      aspect-ratio: 1/1;
      min-height: 100px;
    }
    &:hover {
      min-height: calc(100% - 50px);
    }
    @media screen and (max-width: 768px) {
      &.active,
      &:hover {
        min-height: 110%;
      }
    }
  }
  img {
    width: 100%;
    transition: 1s ease-in-out;
    filter: grayscale(100%);
    border-radius: var(--border-radius);

    &.active {
      filter: grayscale(0%);
    }
  }
  p {
    flex: 1;
    padding: 0 2%;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    text-align: center;
    text-wrap: balance;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
</style>
