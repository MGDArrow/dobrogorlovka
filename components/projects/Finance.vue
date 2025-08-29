<template>
  <div class="project-finance">
    <ProjectsName>
      <h2>{{ title }}</h2>
    </ProjectsName>
    <span
      >Общие расходы на реализацию проекта:
      <strong>{{ summaString }}</strong></span
    >
    <div class="project-finance__chart">
      <div
        v-for="(price, finance) in props.data"
        :key="finance"
        :style="{ width: `${getWidth(price)}%` }"
        :class="{ active: hover === finance || hover === false }"
        @mouseover="hover = finance"
        @mouseleave="hover = false"
        @touchstart="hover = finance"
        @touchcancel="hover = false"
      >
        {{ hover === finance ? `${getWidth(price)}%` : '' }}
      </div>
    </div>
    <ul>
      <li
        v-for="(price, finance) in props.data"
        :key="finance"
        :class="{ active: hover === finance || hover === false }"
        @mouseover="hover = finance"
        @mouseleave="hover = false"
        @touchstart="hover = finance"
        @touchcancel="hover = false"
      >
        <span>{{ finance }}:</span>
        <strong>{{
          Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
          }).format(price)
        }}</strong>
      </li>
    </ul>
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
  const summaString = Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  }).format(summa);

  function getWidth(price: number) {
    return Math.round((price / summa) * 1000) / 10;
  }
</script>

<style scoped lang="scss">
  .project-finance {
    width: 100%;
    & > span {
      display: block;
      text-align: center;
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
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--color-white);
        font-weight: 600;
        opacity: 0.5;
        &.active {
          opacity: 1;
        }
        &:first-child {
          border-radius: 10px 0 0 10px;
        }
        &:last-child {
          border-radius: 0 10px 10px 0;
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
        flex: 1;
        max-width: 480px;
        height: 30px;
        margin: 0 auto;
        gap: 4px;
      }
    }
    & ul {
      @media screen and (max-width: 768px) {
        flex: 1;
        max-width: 500px;
        margin: 0 auto;
        font-size: 0.8em;
      }
      & li {
        margin: 10px 14px;
        line-height: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        opacity: 0.5;
        transition: 0.3s ease-in-out;
        & span {
          flex: 1;
        }
        & strong {
          font-weight: 600;
        }
        &::before {
          display: block;
          content: ' ';
          min-width: 20px;
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 2px solid var(--color-black);
        }
        &:nth-child(4n + 1)::before {
          background: var(--color-orange);
        }
        &:nth-child(4n + 2)::before {
          background: var(--color-green);
        }
        &:nth-child(4n + 3)::before {
          background: var(--color-blue);
        }
        &:nth-child(4n + 4)::before {
          background: var(--color-pink);
        }
        &.active {
          opacity: 1;
        }
      }
    }
  }
</style>
