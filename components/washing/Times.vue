<template>
  <div class="dates">
    <div
      class="dates__date"
      v-for="time in times"
      :key="time"
      @click="modelValue = setTimeInDate(modelValue, time)"
      :class="[{ active: isTimeCurrent(time, modelValue) }]"
    >
      <div class="dates__day">{{ time }}</div>
      <div class="dates__weekday">—</div>
    </div>
    <!-- {{ modelValue.toDate() }} -->
  </div>
</template>

<script setup lang="ts">
  import { Dayjs } from 'dayjs';

  const times = ['09:30', '11:00', '12:30'];

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
