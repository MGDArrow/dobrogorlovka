<template>
  <div class="project-steps">
    <h1>{{ h1 }}</h1>
    <div class="project-steps__buttons">
      <button @click="isSorted = false" :class="{ active: !isSorted }">
        Сначала новые
      </button>
      <button @click="isSorted = true" :class="{ active: isSorted }">
        Сначала старые
      </button>
    </div>

    <div class="project-steps__body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  const isSorted = ref(false);
  const direction = computed(() => {
    return isSorted.value ? 'column-reverse' : 'column';
  });

  interface Props {
    h1: string;
  }

  const props = defineProps<Props>();
</script>

<style scoped lang="scss">
  .project-steps {
    width: 100%;
    margin-top: 20px;
    &__buttons {
      display: flex;
      justify-content: center;
      gap: min(20px, 2vw);
      margin: 0 auto;
      & button {
        font-weight: 600;
        font-size: 1em;
        background: transparent;
        cursor: pointer;
        padding: 10px min(20px, 1vw);
        border: 4px solid var(--color-black);
        border-radius: var(--border-radius);
        transition: 0.3s ease-in-out;
        &.active {
          background: var(--color-black);
          color: var(--color-white);
        }
      }
    }
    &__body {
      display: flex;
      flex-direction: v-bind(direction);
    }
  }
</style>
