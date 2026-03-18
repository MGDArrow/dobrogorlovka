<template>
  <button class="ui-button" type="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
</script>

<style scoped lang="scss">
  .ui-button {
    width: 100%;
    margin: 20px 0;
    border: 4px solid var(--color-black);
    border-radius: var(--border-radius);
    font-size: 1.2em;
    padding: 10px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    &:hover {
      background: var(--color-green);
      color: var(--color-white);
    }
    @media screen and (max-width: 1199px) {
      font-size: 1em;
      padding: 6px;
      height: 65px;
      margin: 20px 0;
    }
    @media screen and (max-width: 768px) {
      border: 3px solid var(--color-black);
      font-size: 0.8em;
      padding: 4px;
      height: 45px;
      margin: 15px 0;
    }
  }
</style>
