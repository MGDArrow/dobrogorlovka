<template>
  <div class="project-date">
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style lang="scss">
  .project-date {
    width: 100%;
    font-size: 1.1em;
    margin: 15px auto;
    text-align: center;
    & strong {
      font-weight: 600;
    }
    & span {
      @media screen and (max-width: 1199px) {
        display: block;
      }
    }
    @media screen and (max-width: 1199px) {
      font-size: 1em;
    }
    @media screen and (max-width: 768px) {
      // font-size: 0.8em;
    }
  }
</style>
