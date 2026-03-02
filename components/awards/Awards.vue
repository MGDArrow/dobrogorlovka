<template>
  <section class="awards" id="awards" ref="activeRef">
    <h2>Награды и благодарности</h2>
    <div class="awards__body">
      <AwardsCard
        v-for="award in awards"
        :key="award.photo"
        :award
        @click="popup = award"
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
      <div class="popup-photo__base">
        <img :src="`awards/${popup.photo}.webp`" alt="Фото" />
        <div class="popup-photo__date" v-if="popup.date">
          {{ popup.date }}
        </div>
      </div>
    </UiPopup>
  </section>
</template>

<script setup lang="ts">
  import { ENV } from '~/assets/env';
  import type { IPhotoAward } from '~/types/types';
  const awards = ENV.awards;

  const popup: Ref<null | IPhotoAward> = ref(null);

  const isArrowLeft = computed(() => {
    if (popup.value === null) return false;
    return getCurrentIndex() !== 0;
  });
  const isArrowRight = computed(() => {
    if (awards.length === 1) return false;
    return getCurrentIndex() !== awards.length - 1;
  });

  function getCurrentIndex() {
    const popupPhotoName =
      typeof popup.value === 'string' ? popup.value : popup.value?.photo;
    const index = awards.findIndex((photo) => {
      const arrayPhotoName = typeof photo === 'string' ? photo : photo.photo;
      return arrayPhotoName === popupPhotoName;
    });
    return index;
  }

  function changePhoto(inc: -1 | 1) {
    popup.value = awards[getCurrentIndex() + inc];
  }
</script>

<style scoped lang="scss">
  .awards {
    width: 80%;
    margin: 20px auto;
    &__body {
      // height: 450px;
      gap: 20px;
      display: flex;
      // justify-content: center;
      // align-items: center;
      overflow-y: hidden;
      overflow-x: auto;
      padding: 10px 20px;
      &::-webkit-scrollbar {
        height: 4px;
        @media screen and (max-width: 500px) {
          display: none;
        }
      }
      &::-webkit-scrollbar-track {
        background: var(--color-white);
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-black);
        border-radius: 15px;
      }
    }
  }
  .project-photos {
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
      justify-content: center;
      display: flex;
    }
    &__date {
      min-width: 100%;
      width: auto;
      position: absolute;
      left: 50%;
      bottom: 0;
      padding: 15px;
      transform: translateX(-50%);
      font-size: 1.2em;
      color: white;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      @media screen and (max-width: 1599px) {
        min-width: 80vw;
      }
      @media screen and (max-width: 1199px) {
        font-size: 0.9em;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8em;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.7em;
      }
    }
  }
</style>
