<template>
  <div class="ui-checkbox" @click="changeModel()">
    <input v-model="modelValue" type="checkbox" />
    <span class="ui-checkbox__box">
      <span v-if="modelValue" class="ui-checkbox__check" />
    </span>
    <span class="ui-checkbox__label"><slot /></span>
  </div>
</template>

<script setup lang="ts">
  const modelValue = defineModel<boolean>({ required: true });

  defineSlots<{
    default: string;
  }>();

  function changeModel() {
    modelValue.value = !modelValue.value;
  }
</script>

<style lang="scss" scoped>
  .ui-checkbox {
    cursor: pointer;
    // & * {
    //   box-sizing: border-box;
    // }
    width: max-content;
    display: flex;
    & > input {
      display: none;
    }
    &__box {
      position: relative;
      display: inline-block;
      width: 1.2em;
      aspect-ratio: 1/1;
      border: 3px solid var(--color-black);
      transition: 0.2s ease-in-out;
      border-radius: 0.3em;
    }
    &__label {
      margin-left: 0.5em;
      display: flex;
      align-items: center;
      font-size: 1.5em;
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
