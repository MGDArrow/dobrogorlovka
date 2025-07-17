<template>
  <div class="team-card" @mouseover="isHover = true" >
    <UiBlocks :active="isHover" />
    <div>
      <img :src="photoSrc" alt="Фото" :class="{active: isHover}" />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: string;
}>();

interface Props {
  photoSrc: string;
}
defineProps<Props>();

const isHover = ref(false);
</script>

<style scoped lang="scss">
.team-card {
  width: 350px;
  height: 450px;
  border: 5px solid var(--color-black);
  border-radius: var(--border-radius);
  padding: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-align: center;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: end;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1599px) {
    width: 300px;
    height: 400px;
	}
  @media screen and (max-width: 1199px) {
    width: 200px;
    height: 300px;
	}
  
  & img {
    width: 50%;
    display: block;
    margin: 20px auto;
    border-radius: 50%;
    border: 8px solid black;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
    &.active{
      filter: grayscale(0%);
    }
    @media screen and (max-width: 1199px) {
      width: 70%;
      margin: 10px auto;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
