<template>
  <div class="award-card">
    <div class="award-card__photo">
      <img :src="`awards/${award.photo}.webp`" alt="Фото" />
    </div>
    <div v-if="award.date" class="award-card__text">
      {{ award.date }}
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    award: { date?: string; photo: string };
  }

  const props = defineProps<Props>();
</script>

<style scoped lang="scss">
  .award-card {
    width: 100%;
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(1.04);
    }
    &__photo {
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      & img {
        border-radius: var(--border-radius);
        border: 4px solid var(--color-black);
        overflow: hidden;
        height: 400px;
        @media screen and (max-width: 1199px) {
          height: 350px;
        }
        @media screen and (max-width: 768px) {
          height: 200px;
        }
      }
    }
    &__text {
      max-width: 500px;
      margin: 10px auto 0;
      //   margin-top: 10px;
      font-weight: 100;
      font-size: 0.8em;
      text-align: center;
      @media screen and (max-width: 768px) {
        font-size: 0.6em;
      }
    }
  }
</style>
