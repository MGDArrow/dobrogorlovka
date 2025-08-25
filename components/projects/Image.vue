<template>
  <div
    class="project-image"
    :class="{ active: isHover }"
    @mouseover="isHover = true"
    ref="activeRef"
  >
    <img
      :src="`/projects/${photoSrc}.webp`"
      :class="{ active: isHover }"
      alt="Фото"
    />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    photoSrc: string;
  }

  const isHover = ref(false);

  defineProps<Props>();

  const activeRef = useTemplateRef('activeRef');

  onMounted(() => {
    document.addEventListener('scroll', () =>
      scrollActivation(activeRef.value, isHover),
    );
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', () =>
      scrollActivation(activeRef.value, isHover),
    );
  });
</script>

<style scoped lang="scss">
  .project-image {
    width: max-content;
    height: max-content;
    padding: 40px;
    border: 4px solid var(--color-black);
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: conic-gradient(
      v-bind(getRandomColor()) var(--angle),
      var(--color-white) var(--angle) 360deg
    );
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
    &.active {
      animation: 0.4s rotate linear;
      animation-fill-mode: forwards;
    }
    & img {
      border-radius: var(--border-radius);
      border: 4px solid var(--color-black);
      filter: grayscale(100%);
      &.active {
        filter: grayscale(0%);
      }
      @media screen and (max-width: 1199px) {
        width: 200px;
      }
      @media screen and (max-width: 768px) {
        width: 250px;
      }
    }
    @media screen and (max-width: 1199px) {
      padding: 30px;
    }
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
    @keyframes rotate {
      to {
        --angle: 360deg;
      }
    }
  }
</style>
