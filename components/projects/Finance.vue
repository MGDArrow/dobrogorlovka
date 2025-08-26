<template>
  <div class="project-finance">
    <ProjectsName>
      <h2>{{ title }}</h2>
    </ProjectsName>
    <span
      >{{ labelString }}: <strong>{{ summaString }}</strong></span
    >
    <div class="project-finance__chart">
      <div
        v-for="(price, finance) in props.data"
        :key="finance"
        :style="{ width: `${getWidth(price)}%` }"
        @mouseover="hover = finance"
        @mouseleave="hover = false"
      />
    </div>
    <!-- <ul>
      <li>Cредства предоставлены Фондом президентских грантов</li>
      <li>Софинансирование</li>
    </ul> -->
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  interface Props {
    title: string;
    data: { [key: string]: number };
  }

  const props = defineProps<Props>();
  const hover: Ref<false | string | number> = ref(false);

  const summa = Object.values(props.data).reduce((a, s) => (a += s), 0);

  const labelString = computed(() => {
    return hover.value ? hover.value : 'Общие расходы на реализацию проекта';
  });

  const summaString = computed(() => {
    const endSumma = hover.value ? props.data[hover.value] : summa;
    return Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
    }).format(endSumma);
  });

  function getWidth(price: number) {
    return Math.round((price / summa) * 100);
  }
</script>

<style scoped lang="scss">
  .project-finance {
    width: 100%;
    & > span {
      display: block;
      text-align: center;
      // font-size: 1.2em;
      & strong {
        margin: 10px 0;
        display: block;
        font-weight: 600;
        font-size: 1.5em;
      }
    }
    &__chart {
      height: 50px;
      padding: 10px;
      margin: 10px 0;
      border-radius: var(--border-radius);
      border: 4px solid var(--color-black);
      display: flex;
      gap: 10px;
      & div {
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:has(~ div:hover),
        &:hover ~ div {
          opacity: 0.6;
        }
        &:nth-child(4n + 1) {
          background: var(--color-orange);
        }
        &:nth-child(4n + 2) {
          background: var(--color-green);
        }
        &:nth-child(4n + 3) {
          background: var(--color-blue);
        }
        &:nth-child(4n + 4) {
          background: var(--color-pink);
        }
      }
      @media screen and (max-width: 768px) {
        width: min(calc(100% - 20px), 480px);
        height: 30px;
        margin: 0 auto;
      }
    }
  }
</style>
