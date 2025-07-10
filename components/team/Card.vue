<template>
  <div class="team-card" @mouseover="isHover = true" >
    <UiBlocks :active="isHover" />
    <div>
      <img :src="photoSrc" alt="Фото" />
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

  & img {
    width: 50%;
    display: block;
    margin: 20px auto;
    border-radius: 50%;
    border: 8px solid black;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
  }

  &:hover {
    // border-color: var(--color-green);
    // box-shadow: 0 0 10px 5px var(--color-green);
    transform: scale(1.05);

    & img {
      filter: grayscale(0%);
    }
  }
}
</style>
