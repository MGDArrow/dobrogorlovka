<template>
  <div class="project-image" @mouseover="isHover = true">
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
    & img {
      //   width: 250px;
      //   height: 250px;
      border-radius: var(--border-radius);
      border: 4px solid var(--color-black);
      @media screen and (max-width: 1199px) {
        width: 200px;
      }
      @media screen and (max-width: 768px) {
        width: 250px;
        // flex-wrap: wrap;
      }
    }
    @media screen and (max-width: 1199px) {
      padding: 30px;
    }
    @media screen and (max-width: 768px) {
      // width: 100%;
      margin: 0 auto;
      // padding: 40px;
      // flex-wrap: wrap;
    }
  }
</style>
