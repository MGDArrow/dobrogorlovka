<template>
  <div class="dates">
    <div
      class="dates__date"
      v-for="(date, index) in times"
      :key="index"
      :class="{ unactive: !date.isFree, active: currentTimes === date.date }"
      @click="emitDateTimes(date.date, date.isFree)"
    >
      <div class="dates__day">
        {{ formatTime(date.date) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IWashingDate, TDatesForWashing } from '~/types/types';

  interface Props {
    times: IWashingDate[];
    currentTimes: null | string;
  }
  defineProps<Props>();

  const emit = defineEmits<{
    setDateTimes: [times: string];
  }>();

  function emitDateTimes(date: string, isFree: boolean) {
    if (isFree) emit('setDateTimes', date);
  }
</script>

<style scoped lang="scss">
  .dates {
    width: 100%;
    display: flex;
    gap: 10px;
    @media screen and (max-width: 768px) {
      font-size: 0.7em;
    }
    &__date {
      padding: 10px;
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      flex: 1;
      margin: 20px 0;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      @media screen and (max-width: 768px) {
        margin: 5px 0;
      }
      &:hover:not(.unactive),
      &.active {
        background: v-bind(getRandomColor());
        color: var(--color-white);
      }
      &.unactive {
        opacity: 0.5;
        cursor: auto;
      }
    }
    &__day {
      font-weight: 600;
      font-size: 1.2em;
    }
  }
</style>
