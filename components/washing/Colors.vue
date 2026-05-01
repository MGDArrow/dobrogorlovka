<template>
  <div class="colors">
    <div v-if="loading">
      <UiSpinner />
    </div>
    <div v-else-if="washTypes.length === 0">Нет добавленных типов стирок</div>
    <div
      v-else
      class="colors__color"
      v-for="(color, index) in washTypes"
      :key="color.name"
    >
      <div class="checkbox">
        <UiCheckbox v-model="color.isNeed">{{ color.name }}</UiCheckbox>
      </div>
      <div class="colors__info">
        <div>
          <span><UiIcon :name="'temperature'" :size="'1.2em'" />:</span>
          {{ color.temperature }}
          <span>°C</span>
        </div>
        <div>
          <span><UiIcon :name="'spin'" :size="'1.2em'" />:</span>
          {{ color.dryingSpin }}
          <span>об/мин</span>
        </div>
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
  </div>
</template>

<script setup lang="ts">
  interface WashType {
    id: number;
    name: string;
    description: string;
    temperature: number;
    dryingSpin: number;
    isNeed: boolean;
    isActive: boolean;
  }

  const modelValue = defineModel<number[]>({ required: true });

  const washTypes = ref<WashType[]>([]);
  const loading = ref(false);

  const isDescription: Ref<null | number> = ref(null);

  function setOpenDescription(index: number) {
    isDescription.value =
      isDescription.value === null
        ? index
        : isDescription.value !== index
          ? index
          : null;
  }

  async function loadWashTypes() {
    loading.value = true;
    try {
      const data = await $fetch<WashType[]>('/api/wash-types');
      const onlyActive = data.filter((type) => type.isActive);
      onlyActive.map((data) => {
        if (modelValue.value.includes(data.id)) data.isNeed = true;
      });
      washTypes.value = onlyActive;
    } catch (err) {
      console.error('Ошибка загрузки типов стирок', err);
    } finally {
      loading.value = false;
    }
  }

  watch(
    () => washTypes,
    (newVal) => {
      let ids: Array<number> = [];
      newVal.value.forEach((el) => {
        if (el.isNeed) ids.push(el.id);
      });
      modelValue.value = ids;
    },
    { deep: true },
  );

  onMounted(() => {
    loadWashTypes();
  });
</script>

<style scoped lang="scss">
  .colors {
    width: 100%;
    // max-height: 40dvh;
    // overflow-y: auto;
    // padding: 0 10px;
    @media screen and (max-width: 768px) {
      // padding: 0;
      max-height: max-content;
      overflow-y: unset;
    }
    &__color {
      scale: 0.98;
      border: 3px solid var(--color-black);
      border-radius: var(--border-radius);
      padding: 5px;
      margin: 8px auto;
      transition: 0.2s ease-in-out;
      &:hover {
        scale: 1;
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
      flex: 1;
      &.open {
        // transition: 0.2s ease-in-out;
        max-height: 100dvh;
      }
    }
    &__info {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 5px 0;
      & div {
        & span {
          font-weight: 600;
          & svg {
            position: relative;
            top: 0.2em;
          }
        }
      }
    }
  }

  .checkbox {
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
