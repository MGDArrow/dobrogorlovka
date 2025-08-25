<template>
  <UiPopup @close-popup="emit('closePopup')">
    <div class="team-card-popup">
      <img
        :src="`/persons/${persona.photo}_full.webp`"
        :alt="persona.surname"
      />
      <div class="team-card-popup__content">
        <TeamName>
          <p class="team-card-popup__title">
            <strong>{{ persona.surname }}</strong> {{ persona.name }}
          </p>
        </TeamName>
        <p>{{ persona.description }}</p>
        <TeamName>
          <p>
            <span>{{ persona.post }}</span>
          </p>
        </TeamName>
      </div>
    </div>
  </UiPopup>
</template>

<script setup lang="ts">
  import type { IPersona } from '~/types/types';

  interface Props {
    persona: IPersona;
  }

  defineProps<Props>();

  const emit = defineEmits<{
    closePopup: [];
  }>();
</script>

<style scoped lang="scss">
  .team-card-popup {
    text-align: center;
    display: flex;
    align-items: center;
    gap: 30px;
    & img {
      height: 600px;
      @media screen and (max-width: 1599px) {
        height: 450px;
      }
      @media screen and (max-width: 1199px) {
        height: 300px;
      }
      @media screen and (max-width: 768px) {
        height: unset;
        max-width: 90vw;
        display: block;
        margin: 0 auto;
      }
    }
    &__content {
      font-size: 1.2em;
      max-height: 800px;
      width: 800px;
      @media screen and (max-width: 1599px) {
        font-size: 1em;
      }
      @media screen and (max-width: 1199px) {
        font-size: 0.8em;
        max-width: calc(90vw - 400px);
        max-height: 90dvh;
        overflow-y: auto;
      }
      @media screen and (max-width: 768px) {
        max-width: 90vw;
      }
    }
    &__title {
      font-size: 1.2em;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }
</style>
