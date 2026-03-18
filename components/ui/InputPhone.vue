<template>
  <div class="ui-input">
    <label>
      <p>
        {{ label }}
      </p>
      <input type="tel" v-model="modelValue" :placeholder="placeholder" />
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

  watch(
    () => modelValue.value,
    async (newValue, oldValue) => {
      if (newValue.length > 18) {
        modelValue.value = oldValue;
        return;
      }
      modelValue.value = maskPhone(newValue);
    },
    { flush: 'post' },
  );

  function maskPhone(tel: string) {
    let t = tel;
    if (t.startsWith('7') || t.startsWith('+')) {
      if (t.startsWith('7') || t[1] === '7') {
        const x = /(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/.exec(
          t.replace(/\D/g, ''),
        );
        if (!x) return t;
        x[1] = '+7';
        t = !x[3]
          ? `${x[1]} (${x[2]}`
          : `${x[1]} (${x[2]}) ${x[3]}${x[4] ? `-${x[4]}` : ''}${x[5] ? `-${x[5]}` : ''}`;
      }
    } else t = '';

    return t;
  }
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
