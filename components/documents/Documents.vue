<template>
  <section class="documents" id="docs">
    <slot />
  </section>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style lang="scss">
  .documents {
    &__cards {
      width: 80%;
      margin: 20px auto;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      @media screen and (max-width: 1599px) {
        width: 1100px;
        font-size: 0.8em;
      }
      @media screen and (max-width: 1199px) {
        width: 750px;
      }
      @media screen and (max-width: 768px) {
        width: calc(98vw - 40px);
        flex-direction: column;
        gap: 20px;
      }
    }
  }
</style>
