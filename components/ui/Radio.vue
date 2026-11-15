<template>
  <div class="ui-radio">
    <p>
      {{ title }}
    </p>
    <div class="ui-radio__lines">
      <div
        class="ui-radio__line"
        v-for="value in values"
        :key="value"
        @click="!disabled ? (modelValue = value) : ''"
      >
        <input
          type="radio"
          v-model="modelValue"
          :placeholder="placeholder"
          :disabled
          :value
        />
        <span class="ui-radio__box">
          <span v-if="modelValue === value" class="ui-radio__check" />
        </span>
        <label class="ui-radio__label">{{ value }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title?: string;
    placeholder?: string;
    disabled?: boolean;
    values: string[];
  }

  const modelValue = defineModel<string>({ required: true });

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
  });
</script>

<style scoped lang="scss">
  .ui-radio {
    width: 100%;
    margin: 30px 0;
    @media screen and (max-width: 1199px) {
      margin: 20px 0;
    }
    @media screen and (max-width: 768px) {
      margin: 15px 0;
    }
    & p {
      width: calc(100% - 10px);
      margin-bottom: 5px;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 10px;
      @media screen and (max-width: 1199px) {
        font-size: 1em;
      }
      // @media screen and (max-width: 768px) {
      //   font-size: 0.8em;
      // }
    }
    & input {
      display: none;
    }
    &__lines {
      display: flex;
      flex-wrap: wrap;
      gap: 0 1em;
    }
    &__line {
      display: flex;
      margin: 10px 0;
      gap: 0.5em;
      cursor: pointer;
      width: max-content;
      @media screen and (max-width: 768px) {
        margin: 5px 0;
      }
    }
    &__box {
      position: relative;
      height: 1.2em;
      aspect-ratio: 1/1;
      border: 3px solid var(--color-black);
      border-radius: 100%;
    }
    &__label {
      font-size: 1.5em;
      @media screen and (max-width: 1199px) {
        font-size: 1em;
        line-height: 1.6em;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8em;
        line-height: 2em;
      }
    }
    &__check {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 75%;
      height: 75%;
      content: ' ';
      background-color: var(--color-black);
      border-radius: 100%;
    }
  }
</style>
