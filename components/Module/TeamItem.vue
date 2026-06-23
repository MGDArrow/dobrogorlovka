<template>
  <div
    class="item"
    :class="{ line: type === 'line' }"
    @mouseover="isHover = true"
    ref="activeRef"
    @click="isOpenPopup = true"
  >
    <div class="item__blocks">
      <UiBlocks :active="isHover" />
    </div>
    <NuxtImg
      :src="`/persons/${photoSrc}.webp`"
      :alt="$slots.surname"
      :class="{ active: isHover }"
      class="item__img"
    />
    <div class="item__info">
      <div class="item__surname" v-if="$slots.surname" v-once>
        <slot name="surname" />
      </div>
      <div class="item__name" v-if="$slots.name" v-once>
        <slot name="name" />
      </div>
      <div class="item__role" v-if="$slots.role" v-once>
        <slot name="role" />
      </div>
    </div>
  </div>

  <Teleport :to="'body'" v-if="isOpenPopup">
    <UiPopup @close-popup="isOpenPopup = false">
      <div class="popup">
        <div class="item__blocks">
          <UiBlocks :active="isHover" />
        </div>
        <NuxtImg
          :src="`/persons/${photoSrc}_full.webp`"
          :alt="$slots.surname"
          class="popup__img"
        />
        <div class="popup__info">
          <div class="item__surname" v-if="$slots.surname" v-once>
            <slot name="surname" />
          </div>
          <div class="item__name" v-if="$slots.name" v-once>
            <slot name="name" />
          </div>
          <div class="item__role" v-if="$slots.role" v-once>
            <slot name="role" />
          </div>
          <div class="item__description" v-if="$slots.description">
            <slot name="description" />
          </div>
        </div>
      </div>
    </UiPopup>
  </Teleport>
</template>

<script setup lang="ts">
  defineSlots<{
    surname: string;
    name: string;
    description: string;
    role: string;
  }>();

  interface Props {
    photoSrc: string;
    type?: 'card' | 'line';
  }

  const props = withDefaults(defineProps<Props>(), {
    type: 'card',
  });

  const activeRef = useTemplateRef('activeRef');
  const { isActive: isHover } = useMobileIntersectionObserver(activeRef);

  const isOpenPopup = ref(false);
</script>

<style scoped lang="scss">
  .item {
    position: relative;
    box-sizing: border-box;
    border: 5px solid var(--color-black);
    border-radius: 15px;
    padding: 50px 10px 20px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    overflow: hidden;
    font-size: 1.2em;
    width: 360px;
    text-align: center;
    &:hover {
      transform: scale(1.05);
    }
    &__blocks {
      position: absolute;
      top: -80px;
      left: -500px;
      transform: scale(0.85);
      z-index: 0;
      @media screen and (max-width: 1199px) {
        left: -700px;
      }
      @media screen and (max-width: 768px) {
        left: -600px;
      }
    }
    &__img {
      width: 250px;
      aspect-ratio: 1/1;
      margin: 10px auto;
      display: block;
      border-radius: 50%;
      border: 5px solid black;
      transition: 0.5s ease-in-out;
      filter: grayscale(100%);
      background: var(--color-white);
      &.active {
        filter: grayscale(0%);
      }
    }
    &__surname {
      font-size: 1.1em;
      font-weight: 600;
      text-transform: uppercase;
    }
    &__name {
      font-size: 0.9em;
    }
    &__role {
      font-size: 0.75em;
      margin-top: 0.5em;
      font-style: italic;
      text-wrap: balance;
    }
    &__description {
      max-width: 600px;
      margin: 0 auto;
      font-size: 0.7em;
      margin-top: 0.5em;
      text-align: left;
    }
  }

  @media screen and (min-width: 1200px) {
    .item.line {
      width: 75%;
      display: flex;
      padding: 10px;
      & .item {
        &__blocks {
          top: -80px;
          left: -400px;
          transform: scale(0.75);
        }
        &__img {
          height: 130px;
          margin: 0 auto;
          aspect-ratio: 1/1;
          width: auto;
        }
        &__info {
          width: 70%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  .popup {
    box-sizing: border-box;
    display: flex;
    font-size: 1.2em;
    gap: 30px;
    align-items: center;
    &__img {
      min-width: 450px;
      max-width: 600px;
      position: relative;
      border: 4px solid black;
      border-radius: 10px;
      align-self: start;

      @media screen and (max-width: 1599px) {
        min-width: 400px;
        max-width: 450px;
      }
      @media screen and (max-width: 1199px) {
        min-width: 300px;
        max-width: 400px;
      }
      @media screen and (max-width: 768px) {
        align-self: center;
        min-width: none;
        max-width: 100%;
      }
    }
    &__info {
      position: relative;
      min-width: 600px;
      text-align: right;
      background: rgba(255, 255, 255, 0.7);
      @media screen and (max-width: 1199px) {
        min-width: 250px;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 1.2em;
      }
    }
    @media screen and (max-width: 1199px) {
      font-size: 1em;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;

      gap: 20px;
    }
  }
</style>
