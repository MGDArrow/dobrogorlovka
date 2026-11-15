<template>
  <div class="ui-checkbox-groupe">
    <p>
      {{ title }}
    </p>
    <div class="ui-checkbox-groupe__lines">
      <label
        class="ui-checkbox-groupe__line"
        v-for="value in values"
        :key="value"
        @click="changeValue(value)"
      >
        <input
          type="checkbox"
          v-model="modelValue"
          :placeholder="placeholder"
          :disabled
          :value
        />
        <span class="ui-checkbox-groupe__box">
          <span
            v-if="modelValue.includes(value)"
            class="ui-checkbox-groupe__check"
          />
        </span>
        <label class="ui-checkbox-groupe__label">{{ value }}</label>
      </label>
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

  const modelValue = defineModel<string[]>({ required: true });

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
  });

  function changeValue(value: string) {
    if (props.disabled) return;
    if (!modelValue.value.includes(value)) {
      modelValue.value.push(value);
    } else {
      modelValue.value = modelValue.value.filter((el) => el !== value);
    }
  }
</script>

<style scoped lang="scss">
  .ui-checkbox-groupe {
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
      width: 1.2em;
      height: 1.2em;
      border: 3px solid var(--color-black);
      transition: 0.2s ease-in-out;
      border-radius: 0.3em;
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
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      transform: rotate(45deg) translate(-50%, -35%) scale(1.5);
      content: ' ';
      &::before {
        position: absolute;
        bottom: 0;
        left: 40%;
        display: block;
        width: 60%;
        height: 10%;
        background: var(--color-black);
        animation: kf-check-1 0.1s linear 0s;
        content: ' ';
        border-radius: 1em;
      }
      &::after {
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 10%;
        height: 100%;
        background: var(--color-black);
        animation: kf-check-2 0.1s linear 0.1s both;
        content: ' ';
        border-radius: 1em;
      }
    }
  }

  @keyframes kf-check-1 {
    0% {
      width: 0%;
    }
    100% {
      width: 60%;
    }
  }

  @keyframes kf-check-2 {
    0% {
      height: 0%;
    }
    100% {
      height: 100%;
    }
  }
</style>
