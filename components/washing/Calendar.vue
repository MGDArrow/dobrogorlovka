<template>
  <div class="washing-calendar">
    <div
      class="washing-calendar__arrow-back"
      :class="{ unactive: isCurrentWeek(modelValue) }"
      @click="modelValue = changeWeek(modelValue, -1)"
    >
      <UiIcon :name="'angle-left'" :size="'30px'" />
    </div>
    <div
      class="washing-calendar__date"
      @click="modelValue = initDaysj(new Date())"
    >
      {{ dateInString }}
    </div>
    <div
      class="washing-calendar__arrow-new"
      @click="modelValue = changeWeek(modelValue, 1)"
    >
      <UiIcon :name="'angle-right'" :size="'30px'" />
    </div>
    <label class="washing-calendar__calendar">
      <input type="date" v-model="inputModel" />
      <div class="washing-calendar__button">
        <UiIcon :name="'calendar'" :size="'30px'" />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
  import type { Dayjs } from 'dayjs';

  const modelValue = defineModel<Dayjs>({ required: true });

  const inputModel = computed({
    get() {
      return formatInInput(modelValue.value);
    },
    set(newValue) {
      modelValue.value = formatOutInput(newValue);
    },
  });

  const dateInString = computed(() => {
    return formatWeekRange(modelValue.value);
  });
</script>

<style scoped lang="scss">
  .washing-calendar {
    width: 100%;
    display: flex;
    gap: 10px;
    font-size: 1.5em;
    margin: 20px auto;
    & > div,
    & > label {
      cursor: pointer;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      &.unactive {
        opacity: 0.5;
        cursor: auto;
      }
    }
    &__date {
      flex: 1;
      text-align: center;
    }
    &__calendar {
      display: inline-block;
      position: relative;
      &__button {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      & input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        opacity: 0;
        cursor: pointer;
        box-sizing: border-box;
        &::-webkit-calendar-picker-indicator {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }
      }
    }
  }
</style>
