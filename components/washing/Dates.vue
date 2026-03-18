<template>
  <div class="dates">
    <div
      class="dates__date"
      v-for="(date, index) in dates"
      :key="index"
      @click="modelValue = date"
      :class="[{ active: isDateCurrent(date, modelValue) }]"
    >
      <div class="dates__day">{{ date.format('DD.MM') }}</div>
      <div class="dates__weekday">{{ date.format('dddd') }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Dayjs } from 'dayjs';

  interface Props {
    dates: Dayjs[];
  }
  defineProps<Props>();

  const modelValue = defineModel<Dayjs>({ required: true });
</script>

<style scoped lang="scss">
  .dates {
    width: 100%;
    display: flex;
    gap: 10px;
    &__date {
      padding: 10px;
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      flex: 1;
      margin: 20px 0;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover,
      &.active {
        background: v-bind(getRandomColor());
        color: var(--color-white);
      }
    }
    &__day {
      font-weight: 600;
      font-size: 1.2em;
    }
  }
</style>
