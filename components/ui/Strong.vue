<template>
  <strong><slot /></strong>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style scoped lang="scss">
  strong {
    font-weight: 600;
    color: v-bind(getRandomColor());
  }
</style>
