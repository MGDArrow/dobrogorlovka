<template>
  <div class="charts">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style lang="scss">
  .charts {
    width: 100%;
    row-gap: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
