<template>
  <div class="point">
    <div class="point__info">
      <div class="point__icon" v-if="icon !== null">
        <UiIcon :name="icon" :size="'1em'" />
      </div>
      <div class="point__number">{{ number }}</div>
      <div class="point__ci" v-if="ci">{{ ci }}</div>
    </div>
    <div class="point__name"><slot /></div>
  </div>
</template>

<script setup lang="ts">
  import type { TIcons } from '~/types/types';

  defineSlots<{
    default: string;
  }>();

  interface Props {
    icon?: TIcons | null;
    number: number;
    ci?: string;
    color?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: null,
    color: getRandomColor(),
  });
</script>

<style scoped lang="scss">
  .point {
    width: 250px;
    aspect-ratio: 1/0.6;
    border: 4px solid v-bind('props.color');
    color: v-bind('props.color');
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.57em;
    transition: 0.5s ease-in-out;
    &:hover {
      scale: 1.03;
    }
    @media (width <= 768px) {
      width: 150px;
    }
    &__info {
      display: flex;
      font-size: 3em;
      justify-content: center;
      align-items: end;
    }
    &__ci {
      font-size: 0.75em;
      font-weight: 600;
      padding-left: 0.2em;
    }
    &__number {
      font-size: 1.5em;
      font-weight: 700;
    }
    &__name {
      font-size: 1.2em;
      text-align: center;
      flex-wrap: balance;
    }
  }
</style>
