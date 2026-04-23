<template>
  <div class="dates">
    <div
      class="dates__date"
      v-for="(date, index) in dates"
      :key="index"
      :class="{ unactive: !date[1].isFreeDay, active: currentIndex === index }"
      @click="emitTimes(index, date[1].isFreeDay)"
    >
      <div class="dates__day">{{ date[1].date.format('DD.MM') }}</div>
      <div class="dates__weekday">
        {{ date[1].date.locale('ru').format('dddd') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TDatesForWashing } from '~/types/types';

  interface Props {
    dates: TDatesForWashing[];
    currentIndex: null | number;
  }
  defineProps<Props>();

  const emit = defineEmits<{
    setTimes: [times: number];
  }>();

  function emitTimes(index: number, isFreeDay: boolean) {
    if (isFreeDay) emit('setTimes', index);
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
