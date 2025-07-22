<template>
  <div class="light">
  </div>
</template>

<script setup lang="ts">


const size = () => {
	const random = Math.random(); 
	return random < 0.33 ? '6vw' : random < 0.66 ? '8vw' : '12vw'; 
}

const translateX = () => {
	const random = Math.random();
	return `${random * 100}vw`
}
const translateY = () => {
	const random = Math.random();
	return `${random * 200}dvh`
}
</script>

<style scoped lang="scss">
.light{
  box-shadow:  v-bind(translateX()) v-bind(translateY()) v-bind(size()) v-bind(size()) v-bind(getRandomColor());
  opacity: 0.4;
  z-index: -2;
  display: block;
  position: absolute;
}
</style>
