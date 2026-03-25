<template>
  <div class="project-status" :style="{ color: statusColor }">
    {{ status }}
  </div>
</template>

<script setup lang="ts">
  import type { TStatus } from '~/types/types';

  interface Props {
    status?: TStatus;
    active?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    status: 'Завершённый',
    active: true,
  });

  const statusColor = computed(() => {
    if (!props.active) return '';
    return props.status === 'Активный'
      ? 'var(--color-green)'
      : props.status === 'Завершённый' || props.status === 'Завершена'
        ? 'var(--color-orange)'
        : props.status === 'Предподготовка'
          ? 'var(--color-pink)'
          : 'var(--color-blue)';
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
</style>
