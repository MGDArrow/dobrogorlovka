<template>
  <div class="colors">
    <div
      class="colors__color"
      v-for="(color, index) in colors"
      :key="color.name"
    >
      <div class="checkbox">
        <UiCheckbox v-model="color.isNeed">{{ color.name }}</UiCheckbox>
      </div>
      <div class="colors__desc" @click="setOpenDescription(index)">
        <div
          class="colors__description"
          :class="{ open: isDescription === index }"
        >
          {{ color.description }}
        </div>
        <div class="colors__icon" :class="{ open: isDescription === index }">
          <UiIcon :name="'angle-left'" :size="'0.8em'" />
        </div>
      </div>
    </div>
    <!-- {{ needed }} -->
  </div>
</template>

<script setup lang="ts">
  const colors = reactive([
    {
      name: 'Детская стирка',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
    {
      name: 'Постельное бельё',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
    {
      name: 'Белая одежда',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
    {
      name: 'Тёмная одежда',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
    {
      name: 'Цветная одежда',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
    {
      name: 'Свободная машинка',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis aliquid dolorem excepturi eos! Sint veniam ratione nesciunt! Adipisci, obcaecati nesciunt id autem rerum rem dicta facilis fugit dolore qui.',
      isNeed: false,
    },
  ]);

  const isDescription: Ref<null | number> = ref(null);

  function setOpenDescription(index: number) {
    isDescription.value =
      isDescription.value === null
        ? index
        : isDescription.value !== index
          ? index
          : null;
  }

  const needed = computed(() => {
    let need: string[] = [];
    colors.forEach((el) => {
      if (el.isNeed) need.push(el.name);
    });
    return need;
  });
</script>

<style scoped lang="scss">
  .colors {
    width: 100%;
    &__color {
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      padding: 5px;
      margin: 8px auto;
      transition: 0.2s ease-in-out;
      &:hover {
        scale: 1.01;
      }
    }
    &__desc {
      display: flex;
    }
    &__icon {
      justify-content: end;
      cursor: pointer;
      & svg {
        transition: 0.2s ease-in-out;
      }
      &.open {
        & svg {
          transform: rotate(-90deg);
        }
      }
    }
    &__description {
      max-height: 1em;
      font-size: 0.8em;
      padding: 0.2em 1em 0 2.3em;
      overflow-y: hidden;
      transition: 0.4s;
      &.open {
        // transition: 0.2s ease-in-out;
        max-height: 100dvh;
      }
    }
  }

  .checkbox {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
