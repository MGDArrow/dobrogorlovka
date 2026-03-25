<template>
  <div class="points">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style scoped lang="scss">
  .points {
    width: 100%;
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 10px;
    justify-content: space-evenly;
  }
</style>
