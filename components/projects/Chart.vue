<template>
  <div class="chart" ref="activeRef">
    <div class="chart__box" :data-percent="percentString"></div>
    <div class="chart__numbers">{{ chart.made }} / {{ chart.need }}</div>
    <div class="chart__name">{{ chart.name }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { DIGITAL } from '~/content/digital.project';

  interface Props {
    chart: (typeof DIGITAL.charts)[number];
  }

  const props = defineProps<Props>();

  const percent = Math.round((props.chart.made / props.chart.need) * 100);
  const percentTime = ref(0);
  const percentChart = 1500 / percent;
  const percentString = computed(() => `${percentTime.value}%`);
  const percentCup = percent % 100;
  const degInSercondColor = Math.ceil((280 * percentCup) / 100 + 80);

  const activeRef = useTemplateRef('activeRef');
  const isHover = ref(false);

  onMounted(() => {
    document.addEventListener('scroll', () =>
      scrollActivation(activeRef.value, isHover, 0.6, true),
    );
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', () =>
      scrollActivation(activeRef.value, isHover, 0.6, true),
    );
  });

  const colorOne = ref(80);
  const colorSecond = ref(80);

  watch(isHover, (newVal) => {
    if (!newVal) return;
    const interval = setInterval(() => {
      if (percentTime.value >= percent) clearInterval(interval);
      else percentTime.value += 1;
    }, percentChart);

    const interval2 = setInterval(() => {
      if (colorOne.value >= 360) clearInterval(interval2);
      else colorOne.value += 2.8;
    }, percentChart);

    const interval3 = setInterval(() => {
      if (colorSecond.value >= degInSercondColor) clearInterval(interval3);
      else colorSecond.value += 1;
    }, percentChart);
  });

  const percentGradient = computed(() => {
    return `var(--color-white) 0deg 80deg, 
    var(--color-second) 80deg ${colorSecond.value}deg, 
    var(--color-one) ${colorSecond.value}deg ${colorOne.value}deg,
    var(--color-white) ${colorOne.value}deg
    `;
  });
</script>

<style lang="scss">
  .chart {
    max-width: 350px;
    min-width: max(calc(100% / 3), 320px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    &:nth-child(4n + 1) {
      --color-one: var(--color-green);
      --color-second: var(--color-blue);
    }
    &:nth-child(4n + 2) {
      --color-one: var(--color-blue);
      --color-second: var(--color-orange);
    }
    &:nth-child(4n + 3) {
      --color-one: var(--color-orange);
      --color-second: var(--color-pink);
    }
    &:nth-child(4n + 4) {
      --color-one: var(--color-pink);
      --color-second: var(--color-green);
    }
    &:hover {
      scale: 1.03;
    }
    &__box {
      width: 300px;
      height: 300px;
      background: conic-gradient(v-bind(percentGradient));
      border-radius: 100%;
      position: relative;
      transform: rotateZ(140deg);
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(-140deg);
        content: attr(data-percent);
        color: var(--color-one);
        border-radius: 100%;
        width: 180px;
        font-size: 45px;
        font-weight: 800;
        display: flex;
        border: 2px solid grey;
        justify-content: center;
        align-items: center;
        height: 180px;
        background: var(--color-white);
      }
    }
    &__numbers {
      width: 300px;
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }
    &__name {
      width: 300px;
      font-weight: 100;
      text-align: center;
      font-size: 20px;
    }
  }
</style>
