<template>
  <div class="stager">
    <div
      class="stager__block"
      v-for="(stage, index) in stages"
      :key="stage.icon"
    >
      <div
        class="stager__icon"
        :class="[
          {
            ready: isReady(index),
            active: isActive(stage.icon),
          },
        ]"
        v-bind:data-name="stage.name"
        @click="modelValue = stage.icon"
      >
        <UiIcon :name="stage.icon" :size="'20px'" />
      </div>
      <div
        class="stager__line"
        v-if="index !== stages.length - 1"
        :class="[
          {
            ready: isReady(index),
          },
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { TIcons } from '~/types/types';

  interface Props {
    stages: { name: string; icon: TIcons }[];
  }

  const props = defineProps<Props>();

  const modelValue = defineModel<TIcons>({ required: true });
  function isReady(index: number) {
    return index < props.stages.findIndex((el) => el.icon === modelValue.value);
  }
  function isActive(stage: TIcons) {
    return stage === modelValue.value;
  }
</script>

<style scoped lang="scss">
  .stager {
    display: flex;
    gap: 1em;
    padding: 0 1em;
    &__block {
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 1em;
      &:last-child {
        flex-grow: 0;
      }
    }
    &__icon {
      width: 35px;
      cursor: pointer;
      aspect-ratio: 1/1;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid var(--color-black);
      position: relative;
      transition: 0.3s ease-in-out;
      &.ready,
      &.active {
        background: var(--color-black);
        color: var(--color-white);
      }
      &.active {
        &::after {
          content: ' ';
          position: absolute;
          width: 45px;
          aspect-ratio: 1/1;
          border: 2px solid var(--color-black);
          border-radius: 100%;
        }
      }
      &::before {
        position: absolute;
        content: attr(data-name);
        top: 0px;
        background: var(--color-black);
        padding: 7px 10px;
        border-radius: var(--border-radius);
        color: var(--color-white);
        opacity: 0;
        transition: 0.3s ease;
        transition-delay: 0.8s;
      }
      &:hover::before {
        top: -40px;
        opacity: 1;
      }
    }
    &__line {
      box-sizing: border-box;
      flex-grow: 1;
      height: 8px;
      border-radius: 1em;
      border: 2px solid var(--color-black);
      background: var(--color-white);
      transition: 0.3s ease-in-out;
      &.ready {
        background: var(--color-black);
      }
    }
  }
</style>
