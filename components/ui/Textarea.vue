<template>
  <div class="ui-textarea">
    <label>
      <p>
        {{ label }}
      </p>
      <textarea v-model="modelValue" :placeholder="placeholder" :disabled />
    </label>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    label?: string;
    placeholder?: string;
    disabled?: boolean;
  }

  const modelValue = defineModel<string>({ required: true });

  const props = withDefaults(defineProps<Props>(), {
    disabled: false,
  });
</script>

<style scoped lang="scss">
  .ui-textarea {
    width: 100%;
    margin: 0;
    // @media screen and (max-width: 1199px) {
    //   margin: 20px 0;
    // }
    // @media screen and (max-width: 768px) {
    //   margin: 15px 0;
    // }
    & p {
      width: calc(100% - 10px);
      margin-bottom: 5px;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 10px;
      // @media screen and (max-width: 1199px) {
      //   font-size: 1em;
      // }
      // @media screen and (max-width: 768px) {
      //   font-size: 0.8em;
      // }
    }
    & textarea {
      width: calc(100% - 28px);
      height: 100%;
      border: 4px solid var(--color-black);
      border-radius: var(--border-radius);
      font-size: 1.2em;
      padding: 10px;
      resize: none;
      // @media screen and (max-width: 1199px) {
      //   width: calc(100% - 20px);
      //   font-size: 1em;
      //   padding: 6px;
      //   height: 35px;
      // }
      // @media screen and (max-width: 768px) {
      //   border: 3px solid var(--color-black);
      //   width: calc(100% - 14px);
      //   font-size: 0.8em;
      //   padding: 4px;
      //   height: 30px;
      // }
      &::-webkit-scrollbar {
        width: 4px;
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
      &::-webkit-scrollbar-track {
        background: var(--color-black);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-white);
        border-radius: 15px;
      }
    }
  }
</style>
