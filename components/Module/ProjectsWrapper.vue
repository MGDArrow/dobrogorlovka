<template>
  <div class="projects__wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style scoped lang="scss">
  .projects__wrapper {
    box-sizing: border-box;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 40px;
    width: 100%;
    @media screen and (max-width: 1599px) {
      width: 1100px;
    }
    @media screen and (max-width: 1199px) {
      flex-direction: column;
      gap: 20px;
      width: 730px;
    }
    @media screen and (max-width: 768px) {
      width: calc(98vw - 40px);
      flex-direction: column;
      margin: 0 auto;
      width: 360px;
    }
  }
</style>
