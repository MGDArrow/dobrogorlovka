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
  import { watch } from 'vue';

  interface Props {
    label?: string;
    placeholder?: string;
  }

  const modelValue = defineModel<string>({ required: true });
  const props = defineProps<Props>();

  watch(
    () => modelValue.value,
    (newValue, oldValue) => {
      if (newValue == null) return;

      // Проверяем количество цифр (не более 11 для полного номера +7)
      const digitsOnly = newValue.replace(/\D/g, '');
      if (digitsOnly.length > 11) {
        modelValue.value = oldValue;
        return;
      }

      const masked = maskPhone(newValue);
      if (masked !== newValue) {
        modelValue.value = masked;
      }
    },
    { flush: 'post' },
  );

  function maskPhone(tel: string): string {
    // 1. Извлекаем только цифры
    let digits = tel.replace(/\D/g, '');
    if (!digits.length) return '';

    // 2. Заменяем ведущую 8 на 7
    if (digits[0] === '8') {
      digits = '7' + digits.slice(1);
    }

    // 3. Если после замены номер не начинается с 7 – возвращаем пустую строку
    if (digits[0] !== '7') return '';

    // 4. Обрезаем до 11 цифр (7 + 10)
    if (digits.length > 11) {
      digits = digits.slice(0, 11);
    }

    // 5. Разбиваем на группы: первая цифра, код, остальные части
    const match = /^(\d)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/.exec(digits);
    if (!match) return '';

    const [, first, area, part1, part2, part3] = match;

    // 6. Формируем отформатированную строку в стиле "+7 (XXX) XXX-XX-XX"
    let result = '+7';
    if (area) {
      result += ` (${area}`;
      if (part1) {
        result += `) ${part1}`;
        if (part2) {
          result += `-${part2}`;
          if (part3) {
            result += `-${part3}`;
          }
        }
      }
      // если area есть, но part1 нет – скобка не закрывается (как в оригинале)
    }
    return result;
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
