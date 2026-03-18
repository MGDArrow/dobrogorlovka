<template>
  <div class="ui-input">
    <label>
      <p>
        {{ label }}
      </p>
      <input type="text" v-model="modelValue" :placeholder="placeholder" />
    </label>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label?: string;
    placeholder?: string;
  }

  const modelValue = defineModel<string>({ required: true });

  const props = defineProps<Props>();
</script>

<style scoped lang="scss">
  .ui-input {
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
      @media screen and (max-width: 768px) {
        font-size: 0.8em;
      }
    }
    & input {
      width: calc(100% - 28px);
      height: 40px;
      border: 4px solid var(--color-black);
      border-radius: var(--border-radius);
      font-size: 1.2em;
      padding: 10px;
      @media screen and (max-width: 1199px) {
        width: calc(100% - 20px);
        font-size: 1em;
        padding: 6px;
        height: 35px;
      }
      @media screen and (max-width: 768px) {
        border: 3px solid var(--color-black);
        width: calc(100% - 14px);
        font-size: 0.8em;
        padding: 4px;
        height: 30px;
      }
    }
  }
</style>
