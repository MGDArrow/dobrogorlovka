<template>
  <div class="team-card-small" @mouseover="isHover = true">
    <UiBlocks :active="isHover" />
    <div class="team-card-small__content">
      <img :src="photoSrc" alt="Фото" :class="{ active: isHover }" />
      <slot />
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
  defineProps<Props>();

  const isHover = ref(false);
</script>

<style scoped lang="scss">
  .team-card-small {
    height: 120px;
    border: 5px solid var(--color-black);
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    text-align: center;
    font-size: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 1199px) {
      height: 100px;
    }

    &__content {
      width: max(60%, 600px);
      display: flex;
      justify-content: space-between;
    }

    & img {
      height: 110px;
      display: block;
      border-radius: 50%;
      border: 4px solid black;
      transition: 0.5s ease-in-out;
      filter: grayscale(100%);
      &.active {
        filter: grayscale(0%);
      }
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  .photo-card-small {
    transform: rotateZ(-20deg) translateY(-85%) translateX(-50%);
  }
</style>
