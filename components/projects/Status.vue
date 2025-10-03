<template>
  <div
    class="project-status"
    :class="{
      'status-green': active === true && status === 'Завершённый',
      'status-orange': active === true && status === 'Активный',
    }"
  >
    {{ status }}
  </div>
</template>

<script setup lang="ts">
  import type { TStatus } from '~/types/types';

  interface Props {
    status?: TStatus;
    active?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    status: 'Завершённый',
    active: true,
  });
</script>

<style scoped lang="scss">
  .project-status {
    font-size: 1.2em;
    height: max-content;
    padding: 5px 5px;
    border: 3px solid var(--color-black);
    transition: 0.3s ease-in-out;
    font-weight: 600;
    text-transform: uppercase;
    background: var(--color-white);
    &:hover {
      transform: scale(1.05);
    }
  }

  .status-green {
    color: var(--color-green);
  }
  .status-orange {
    color: var(--color-orange);
  }
</style>
