<template>
  <div class="wrapper__wrapper" ref="parentRef">
    <div class="wrapper__line">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();

  const parentRef = useTemplateRef<HTMLDivElement>('parentRef');

  const isParentVisible = ref(false);

  let parentObserver: IntersectionObserver | null = null;

  onMounted(() => {
    if (!parentRef.value) return;

    parentObserver = new IntersectionObserver(
      ([entry]) => {
        isParentVisible.value = entry.isIntersecting;
      },
      {
        threshold: [0, 0.45],
      },
    );
    parentObserver.observe(parentRef.value);
  });

  onUnmounted(() => {
    parentObserver?.disconnect();
  });

  provide('parentRef', {
    parentRef,
    isParentVisible,
  });
</script>

<style scoped lang="scss">
  .wrapper__wrapper {
    @media screen and (max-width: 768px) {
      padding: 20px 0 20px 10px;
      position: relative;
      width: calc(98vw - 20px);
      margin: 0 auto;
      overflow-y: auto;
    }
  }

  .wrapper__line {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
      align-items: center;
      height: max-content;
      flex-wrap: nowrap;
      padding-right: 10px;
      width: max-content;
    }
  }
</style>
