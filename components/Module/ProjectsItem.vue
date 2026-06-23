<template>
  <div class="item" @mouseover="isHover = true" ref="activeRef">
    <div class="item__blocks">
      <UiBlocks :active="isHover" />
    </div>

    <div class="item__status" :style="{ color: statusColor }">
      {{ status }}
    </div>
    <NuxtImg
      :src="photoSrc"
      alt="Фото"
      :class="{ active: isHover }"
      class="item__img"
    />
    <div class="item__title" v-if="$slots.title" v-once>
      <slot name="title" />
    </div>
    <div class="item__subtitle" v-if="$slots.subtitle" v-once>
      <slot name="subtitle" />
    </div>
    <div class="item__description" v-if="$slots.description" v-once>
      <slot name="description" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TStatus } from '~/types/types';

  defineSlots<{
    title: string;
    subtitle: string;
    description: string;
  }>();

  interface Props {
    photoSrc: string;
    status: TStatus;
  }
  const props = defineProps<Props>();

  const statusColor = computed(() => {
    if (!isHover.value) return '';
    return props.status === 'Активный'
      ? 'var(--color-green)'
      : props.status === 'Завершённый' || props.status === 'Завершена'
        ? 'var(--color-orange)'
        : props.status === 'Предподготовка' || props.status === 'На паузе'
          ? 'var(--color-pink)'
          : 'var(--color-blue)';
  });

  const activeRef = useTemplateRef('activeRef');
  const { isActive: isHover } = useMobileIntersectionObserver(activeRef);
</script>

<style scoped lang="scss">
  .item {
    position: relative;
    box-sizing: border-box;
    border: 5px solid var(--color-black);
    border-radius: 15px;
    padding: 60px 10px 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    flex: 1 0 calc(100% / 3 - 30px);
    font-size: 1.2em;
    min-width: calc(360px);
    text-align: center;
    &:hover {
      transform: scale(1.05);
    }
    &__status {
      position: absolute;
      width: max-content;
      right: 5px;
      top: 5px;
      border-radius: 7px;
      font-size: 1.2em;
      height: max-content;
      width: max-content;
      padding: 5px 5px;
      border: 3px solid var(--color-black);
      border-radius: 10px;
      transition: 0.3s ease-in-out;
      font-weight: 600;
      text-transform: uppercase;
      background: var(--color-white);
      text-align: center;
      &:hover {
        scale: 1.03;
      }
      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }
    &__blocks {
      position: absolute;
      top: -80px;
      left: -500px;
      transform: scale(0.85);
      @media screen and (max-width: 1199px) {
        left: -700px;
      }
      @media screen and (max-width: 768px) {
        left: -600px;
      }
    }
    &__title {
      font-weight: 600;
      text-transform: uppercase;
    }
    &__subtitle {
      font-size: 0.9em;
      font-style: italic;
    }
    &__description {
      max-width: 600px;
      margin: 0 auto;
      font-size: 0.7em;
      margin-top: 0.5em;
    }
  }

  img {
    width: 250px;
    aspect-ratio: 1/1;
    margin: 10px auto;
    display: block;
    border-radius: 50%;
    border: 4px solid black;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
    background: var(--color-white);
    &.active {
      filter: grayscale(0%);
    }
  }
</style>
