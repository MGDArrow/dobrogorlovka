<template>
  <div class="project-name">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style lang="scss">
  .project-name {
    width: 100%;
    font-size: 0.8em;
    & span {
      display: block;
      font-size: 1.8em;
      text-align: center;
      width: 100%;
      font-style: italic;
      @media screen and (max-width: 1199px) {
        font-size: 1.4em;
      }
      @media screen and (max-width: 768px) {
        font-size: 1.2em;
      }
    }
  }
</style>
