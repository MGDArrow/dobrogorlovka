<template>
  <div class="project-photos">
    <img
      v-for="photo in photos"
      :key="photo"
      :src="`/projects/${photo}`"
      alt="Фото"
      @click="popup = photo"
      loading="lazy"
    />
  </div>
  <UiPopup
    v-if="popup !== null"
    @closePopup="popup = null"
    class="project-photos--popup"
    :arrow-left="isArrowLeft"
    :arrow-right="isArrowRight"
    @left="changePhoto(-1)"
    @right="changePhoto(1)"
  >
    <img :src="`/projects/${popup}`" alt="Фото" />
  </UiPopup>
</template>

<script setup lang="ts">
  interface Props {
    photos: string[];
  }

  const props = defineProps<Props>();

  const popup: Ref<null | string> = ref(null);

  const isArrowLeft = computed(() => {
    if (popup.value === null) return false;
    return props.photos.findIndex((photo) => photo === popup.value) !== 0;
  });
  const isArrowRight = computed(() => {
    if (props.photos.length === 1) return false;
    return (
      props.photos.findIndex((photo) => photo === popup.value) !==
      props.photos.length - 1
    );
  });

  function changePhoto(inc: -1 | 1) {
    popup.value =
      props.photos[
        props.photos.findIndex((photo) => photo === popup.value) + inc
      ];
  }
</script>

<style scoped lang="scss">
  .project-photos {
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    & img {
      border: 4px solid var(--color-black);
      border-radius: var(--border-radius);
      cursor: pointer;
      display: block;
      width: 288px;
      aspect-ratio: 1/1;
      image-rendering: optimizeSpeed;
      object-fit: cover;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
      @media screen and (max-width: 1599px) {
        width: 267px;
      }
      @media screen and (max-width: 1199px) {
        width: 225px;
      }
      @media screen and (max-width: 768px) {
        width: 147px;
        border-width: 2px;
      }
    }
    @media screen and (max-width: 1199px) {
      gap: 15px;
    }
    @media screen and (max-width: 768px) {
      gap: 10px;
      justify-content: center;
    }
    &--popup {
      & img {
        width: max-content;
        max-width: 100%;
        max-height: 90dvh;
        @media screen and (max-width: 1599px) {
          min-width: 80vw;
          max-height: 80dvh;
          object-fit: contain;
        }
      }
    }
  }
</style>
