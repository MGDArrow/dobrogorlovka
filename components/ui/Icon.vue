<template>
  <svg
    v-if="currentIcon"
    :viewBox="viewBox"
    :style="style"
    v-bind="{ style, color }"
  >
    <path v-for="(path, index) in paths" :key="index" :d="path" />
  </svg>
</template>

<script setup lang="ts">
  import type { TIcons } from '~/types/types';
  import iconSet from '../../assets/selection.json';

  interface Props {
    name: TIcons;
    color?: string;
    size?: string | number;
  }

  const props = withDefaults(defineProps<Props>(), {
    color: '',
    size: 16,
  });

  const style = {
    display: 'inline-block',
    stroke: 'currentColor',
    fill: 'currentColor',
    width: props.size,
    height: props.size,
  };

  const currentIcon = computed(() =>
    iconSet.icons.find((item) => item.properties.name === props.name),
  );
  const viewBox = computed(
    () =>
      currentIcon.value &&
      `0 0 ${currentIcon.value.icon.width.toString() || '1024'} 1024`,
  );
  const paths = computed(() => currentIcon.value?.icon.paths);
</script>
