<template>
  <div class="washin-orders__wrapper">
    <div class="washin-orders">
      <div
        v-for="order in sortedOrders"
        :key="order.number"
        class="order"
        :class="{ unactive: isUnactive(order.date) }"
      >
        <div class="order__number">
          {{ formatWashinOrderNumber(order.number) }}
        </div>
        <div class="order__date">
          <strong>Дата:</strong> {{ formatDateOrder(order.date) }}
        </div>
        <div class="order__date">
          <strong>Время:</strong> {{ formatTime(order.date) }}
        </div>
        <div class="order__type">
          <strong>Стирки:</strong>
          <UiList>
            <li v-for="type in getType(order.colors)">
              {{ type }}
            </li>
          </UiList>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { WashType } from '~/prisma/generated/client';
  interface ILocalOrder {
    number: string;
    date: string;
    colors: number[];
  }

  interface Props {
    orders: ILocalOrder[];
  }

  const props = defineProps<Props>();

  const sortedOrders = computed(() => {
    const sorted = props.orders.sort(
      (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
    );
    const isActiveArr = sorted.filter((order) => !isUnactive(order.date));
    const isUnActiveArr = sorted.filter((order) => isUnactive(order.date));
    return [...isActiveArr, ...isUnActiveArr].filter(
      (order, index) => index < 10,
    );
  });
  const washTypes = ref<WashType[]>([]);

  function getType(colors: number[]) {
    const names: string[] = [];
    colors.forEach((color) => {
      const type = washTypes.value.find((type) => type.id === color);
      if (type) names.push(type.name);
    });
    return names;
  }

  function isUnactive(date: string) {
    return new Date(date).valueOf() <= new Date().valueOf();
  }

  async function loadWashTypes() {
    try {
      const data = await $fetch<WashType[]>('/api/wash-types');
      washTypes.value = data;
    } catch (err) {
      console.error('Ошибка загрузки типов стирок', err);
    }
  }

  watch(
    () => props.orders,
    () => loadWashTypes(),
  );
</script>

<style scoped lang="scss">
  .washin-orders {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 10px;
    &__wrapper {
      min-width: 300px;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 0 20px;
      margin: 0 auto;
      max-width: max-content;
    }
    & .order {
      width: 300px;
      padding: 10px;
      border: 4px solid var(--color-black);
      border-radius: var(--border-radius);
      &.unactive {
        opacity: 0.2;
        & > * {
          color: var(--color-black);
        }
      }
      &__number {
        text-align: center;
        font-size: 60px;
        font-weight: 600;
        color: v-bind(getRandomColor());
      }
      & strong {
        display: inline-block;
        font-weight: 600;
        width: 100px;
        text-align: right;
      }
      & p {
        text-align: center;
      }
    }
  }
</style>
