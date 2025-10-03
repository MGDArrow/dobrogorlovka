<template>
  <div class="project-photos">
    <div
      class="project-photos__photo"
      v-for="(photo, index) in photos"
      :key="index"
    >
      <img
        :src="`/projects/${typeof photo === 'string' ? photo : photo.photo}`"
        alt="Фото"
        @click="popup = photo"
        loading="lazy"
      />
      <div
        class="project-photos__date"
        v-if="typeof photo !== 'string' && photo.date"
      >
        {{ photo.date }}
      </div>
    </div>
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
    <div class="popup-photo__base">
      <img
        :src="`/projects/${typeof popup === 'string' ? popup : popup.photo}`"
        alt="Фото"
      />
      <div
        class="popup-photo__date"
        v-if="typeof popup !== 'string' && popup.date"
      >
        Дата: {{ popup.date }}
      </div>
    </div>
  </UiPopup>
</template>

<script setup lang="ts">
  import type { TStepPhoto } from '~/types/types';

  interface Props {
    photos: TStepPhoto[];
    photosAll: TStepPhoto[];
  }

  const props = defineProps<Props>();

  const popup: Ref<null | TStepPhoto> = ref(null);

  const isArrowLeft = computed(() => {
    if (popup.value === null) return false;
    return getCurrentIndex() !== 0;
  });
  const isArrowRight = computed(() => {
    if (props.photos.length === 1) return false;
    return getCurrentIndex() !== props.photosAll.length - 1;
  });

  function getCurrentIndex() {
    const popupPhotoName =
      typeof popup.value === 'string' ? popup.value : popup.value?.photo;
    const index = props.photosAll.findIndex((photo) => {
      const arrayPhotoName = typeof photo === 'string' ? photo : photo.photo;
      return arrayPhotoName === popupPhotoName;
    });
    return index;
  }

  function changePhoto(inc: -1 | 1) {
    popup.value = props.photosAll[getCurrentIndex() + inc];
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
      width: inherit;
      aspect-ratio: 1/1;
      image-rendering: optimizeSpeed;
      object-fit: cover;
      @media screen and (max-width: 768px) {
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
    &__photo {
      width: 288px;
      position: relative;
      transition: 0.3s ease-in-out;
      @media screen and (max-width: 1599px) {
        width: 267px;
      }
      @media screen and (max-width: 1199px) {
        width: 225px;
      }
      @media screen and (max-width: 768px) {
        width: 147px;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
    &__date {
      padding: 3px 0;
      width: calc(100% + 4px);
      position: absolute;
      bottom: 2px;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0 0 10px 10px;
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
  .popup-photo {
    &__base {
      position: relative;
    }
    &__date {
      width: max-content;
      position: absolute;
      left: 50%;
      bottom: 10px;
      padding: 15px;
      transform: translateX(-50%);
      font-size: 1.2em;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
    }
  }
</style>
