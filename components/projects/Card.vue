<template>
  <div class="projects-card" @mouseover="isHover = true">
    <UiBlocks :active="isHover"/>
    <div class="projects-card__content">
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
.projects-card{
	height: 500px;
  border: 5px solid var(--color-black);
  border-radius: 15px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-align: center;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  flex: 1;
	@media screen and (max-width: 1199px) {
		font-size: 1em;
	}
	@media screen and (max-width: 768px) {
	  font-size: 1.2em;
		width: 350px;
		margin: 0 auto 20px;
	}

  &__content{
    width: max(60%, 600px);
    display: flex;
	flex-direction: column;
    justify-content: space-between;
  }


  & img {
    // height: 250px;
	width: 250px;
	margin: 10px auto;
    display: block;
    border-radius: 50%;
    border: 4px solid black;
    transition: 0.5s ease-in-out;
    filter: grayscale(100%);
    &.active{
      filter: grayscale(0%);
    }
	  @media screen and (max-width: 1199px) {
		width: 200px;
	}
  }



  &:hover {
    transform: scale(1.05);
  }
}

.photo-card-small{
  transform: rotateZ(-20deg) translateY(-85%) translateX(-50%);
}
</style>
