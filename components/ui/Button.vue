<template>
  <button class="ui-button" :class="{ min: size === 'min' }" type="button">
    <slot />
  </button>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  interface Props {
    color?: string;
    size?: 'normal' | 'min';
  }

  const props = withDefaults(defineProps<Props>(), {
    color: 'var(--color-green)',
    size: 'normal',
  });
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
      background: v-bind(color);
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
    &.min {
      font-size: 0.8em;
      margin: 5px 0;
      padding: 5px;
      border-width: 3px;
      border-radius: calc(var(--border-radius) * 0.75);
      @media screen and (max-width: 1199px) {
        font-size: 0.6em;
        padding: 4px;
        height: 40px;
        margin: 5px 0;
      }
      @media screen and (max-width: 768px) {
        border: 3px solid var(--color-black);
        font-size: 0.6em;
        padding: 4px;
        height: 40px;
        margin: 5px 0;
      }
    }
  }
</style>
