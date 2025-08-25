<template>
  <div class="project-description">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style lang="scss">
  .project-description {
    width: 100%;
    text-align: justify;
    text-indent: 5%;
    line-height: 1.2em;
    & p {
      margin: 10px 0;
    }
    @media screen and (max-width: 1599px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 1199px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
</style>
