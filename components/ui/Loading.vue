<template>
  <div :class="{loading}">
    <div v-for="line in lines"></div>
  </div>
</template>

<script setup lang="ts">
import { loadingValue } from '~/assets/env';

const lines = ref(0);

const loading = computed(() => loadingValue.value)

onMounted(() => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const size = Math.max(height, width);
  const line = width > 1600 ? 50 : width > 1200 ? 43 :  37;
  const count = Math.round(size * 2 / line);
  lines.value = count;
})
</script>

<style scoped lang="scss">
.loading{
  --size: max(100vh, 100vw);
  box-sizing: border-box;
  position: fixed;
  width: calc(var(--size) * 2);
  height: calc(var(--size) * 2);
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) rotateZ(-45deg);
  z-index: 999;
  // background: red;
  overflow: hidden;
  & div {
		width: 100%;
		height: 50px;
		border: 4px solid var(--color-black);
		background-position: 0 0;
		background-size: 200% 200%;
		background-position: 100% 0;
    position: relative;
		&:nth-child(8n + 1){
      background-image: linear-gradient(to right, var(--color-pink) 50%, var(--color-white) 50%);
      animation: go-1 2s both;
    }
    &:nth-child(8n + 2){
      background-image: linear-gradient(to right, var(--color-white) 50%, var(--color-orange) 50%);
      background-position: 0 0;
      animation: go-3 2s both;
    }
    &:nth-child(8n + 3){
      background-image: linear-gradient(to right, var(--color-blue) 50%, var(--color-white) 50%);
      animation: go-2 2s both;
    }
    &:nth-child(8n + 4){
      background-image: linear-gradient(to right, var(--color-white) 50%, var(--color-green) 50%);
      background-position: 0 0;
      animation: go-4 2s both;
		}
		&:nth-child(8n + 5){
      background-image: linear-gradient(to right, var(--color-pink) 50%, var(--color-white) 50%);
      animation: go-1 2s both;
    }
    &:nth-child(8n + 6){
      background-image: linear-gradient(to right, var(--color-white) 50%, var(--color-orange) 50%);
      background-position: 0 0;
      animation: go-3 2s both;
    }
    &:nth-child(8n + 7){
      background-image: linear-gradient(to right, var(--color-blue) 50%, var(--color-white) 50%);
      animation: go-2 2s both;
    }
    &:nth-child(8n + 8){
      background-image: linear-gradient(to right, var(--color-white) 50%, var(--color-green) 50%);
      background-position: 0 0;
      animation: go-4 2s both;
		}
		@media screen and (max-width: 1599px) {
			height: 43px;
		}
		@media screen and (max-width: 1199px) {
			height: 37px;
		}
	}
}

@keyframes go-1 {
  0%{
    left: -150%;
  }
  50%{
    left: 0;
    background-position: 100% 0;
  }
  80% {
    background-position: 0 0;
    left: 0;
  }
  100% {
    left: 150%;
  }
}
@keyframes go-2 {
  0%{
    left: -250%;
  }
  50%{
    left: 0;
    background-position: 100% 0;
  }
  80% {
    left: 0;
    background-position: 0 0;
  }
  100% {
    left: 250%;
  }
}
@keyframes go-3 {
  0%{
    left: 150%;
  }
  50%{
    left: 0;
    background-position: 0 0;
  }
  80% {
    background-position: 100% 0;
    left: 0;
  }
  100% {
    left: -150%;
  }
}
@keyframes go-4 {
  0%{
    left: 250%;
  }
  50%{
    left: 0;
    background-position: 0 0;
  }
  80% {
    background-position: 100% 0;
    left: 0;
  }
  100% {
    left: -250%;
  }
}
</style>
