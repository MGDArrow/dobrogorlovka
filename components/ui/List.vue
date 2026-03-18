<template>
  <figure class="list">
    <figcaption v-if="legend">{{ legend }}</figcaption>
    <ul>
      <slot />
    </ul>
  </figure>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  interface Props {
    legend?: string;
  }

  defineProps<Props>();
</script>

<style lang="scss">
  .list {
    width: 100%;
    & figcaption {
      font-size: 1.1em;
      font-weight: 500;
    }
    & li {
      margin: 8px 0.5em 0 2em;
      text-align: justify;
      line-height: 1.3em;
      &::before {
        display: inline-block;
        margin-right: 2%;
        content: ' ';
        min-width: 0.6em;
        width: 0.6em;
        height: 0.6em;
        border-radius: 2px;
        border: 2px solid var(--color-black);
      }
      &:nth-child(4n + 1)::before {
        background: var(--color-orange);
      }
      &:nth-child(4n + 2)::before {
        background: var(--color-green);
      }
      &:nth-child(4n + 3)::before {
        background: var(--color-blue);
      }
      &:nth-child(4n + 4)::before {
        background: var(--color-pink);
      }
      &:last-child {
        margin-bottom: 8px;
      }
    }
  }
</style>
