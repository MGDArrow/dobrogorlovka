<template>
  <div class="washing__result">
    <div v-if="submitting">
      <UiSpinner />
      <p>Бронируем время стирки...</p>
    </div>
    <div v-else-if="submitResult" class="washing__submit-result">
      <div :class="['result-icon', submitResult.success ? 'success' : 'error']">
        {{ submitResult.success ? '✓' : '✗' }}
      </div>
      <h4>
        {{ submitResult.success ? 'Заказ оформлен!' : 'Ошибка бронирования' }}
      </h4>
      <div v-if="submitResult.success" class="washing__success">
        <p>Номер вашего заказа:</p>
        <div class="washing__success-number" v-if="submitResult.orderNumber">
          {{ formatWashinOrderNumber(submitResult.orderNumber) }}
        </div>
        <p>Время стирки: {{ formatDateTime(submitResult.scheduledAt) }}</p>
      </div>
      <p v-else>{{ submitResult.message }}</p>
      <UiButton
        @click="$emit('closePopup')"
        size="min"
        :color="'var(--color-blue)'"
      >
        Закрыть
      </UiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    submitting: boolean;
    submitResult: {
      success: boolean;
      orderNumber?: string | undefined;
      scheduledAt?: string | undefined;
      message?: string | undefined;
    } | null;
  }

  const props = defineProps<Props>();

  const emit = defineEmits<{
    closePopup: [];
  }>();

  function formatDateTime(isoString: string | undefined) {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
</script>

<style scoped lang="scss">
  .washing {
    &__result {
      min-height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 20px;
    }
    &__submit-result {
      & .result-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        font-weight: bold;
        margin: 0 auto 20px;
        &.success {
          background-color: var(--color-green);
          color: var(--color-white);
        }
        &.error {
          background-color: var(--color-red);
          color: var(--color-white);
        }
      }
    }
    &__success {
      &-number {
        font-size: 3em;
        text-align: center;
        margin: 10px 0;
        font-weight: 600;
        color: v-bind(getRandomColor());
      }
    }
  }
</style>
