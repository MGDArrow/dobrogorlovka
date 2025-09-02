<template>
  <div id="list" class="point-list">
    <template v-for="(point, index) in menu" :key="point.id">
      <NuxtLink :to="`#${point.id}`" :class="{ active: actives[index] }">
        #{{ point.name }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    menu: { name: string; id: string }[];
  }

  const props = defineProps<Props>();
  const actives: Ref<Array<boolean>> = ref([true]);

  onMounted(() => {
    window.addEventListener('scroll', getVisable);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', getVisable);
  });

  function getVisable() {
    const heightCorrect = 1;

    const array: Array<boolean> = [];
    const windowPosition = {
      top: window.pageYOffset,
      bottom: window.pageYOffset + document.documentElement.clientHeight,
    };
    props.menu.forEach((point) => {
      const target = document.querySelector(`#${point.id}`);
      const targetRect = target?.getBoundingClientRect();
      const targetPosition = {
        top: window.pageYOffset + targetRect!.top,
        bottom: window.pageYOffset * heightCorrect + targetRect!.bottom,
      };
      array.push(
        targetPosition.bottom > windowPosition.top &&
          targetPosition.top < windowPosition.bottom,
      );
    });
    actives.value = array;

    const list = document.querySelector(`#list`);
    const block = document.querySelector(`#block`);

    if (list!.scrollWidth > list!.clientWidth) {
      const blockPosition = {
        top: window.pageYOffset + block!.getBoundingClientRect().top,
        bottom: window.pageYOffset + block!.getBoundingClientRect().bottom,
      };
      const blockProgressCount =
        (windowPosition.top - blockPosition.top) /
        (blockPosition.bottom - blockPosition.top);
      const blockProgressPercent =
        blockProgressCount < 0
          ? 0
          : blockProgressCount > 1
            ? 1
            : blockProgressCount;
      const listScrollNeed =
        (list!.scrollWidth - list!.clientWidth) * blockProgressPercent;
      list!.scrollTo({ left: listScrollNeed });
    }
  }
</script>

<style scoped lang="scss">
  .point-list {
    position: sticky;
    top: 0;
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: 20px auto;
    overflow-x: auto;
    font-weight: 600;
    background: var(--color-white);
    font-size: 1.2em;
    z-index: 5;
    & a {
      display: flex;
      align-items: center;
      max-width: 100vw;
      white-space: nowrap;
      cursor: pointer;
      color: var(--colot-black);
      transition: 0.3s ease-in-out;
      &:hover {
        color: v-bind(getRandomColor());
      }
      &.active {
        color: v-bind(getRandomColor());
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 400px) {
      padding: 0 10px;
      width: calc(100% - 20px);
    }

    // @media (width >= 576px) {
    //   width: 100%;
    //   padding: 0 10%;
    //   font-size: 1.2em;
    // }

    // @media (width >= 992px) {
    //   width: 100%;
    //   padding: 0 10vw;
    //   font-size: 1.5em;
    // }
  }
</style>
