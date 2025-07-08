<template>
  <div class="card">card</div>
</template>

<script setup lang="ts">
interface Props {
  height: string;
  width: string;
}

withDefaults(defineProps<Props>(), {
  height: '50dvh',
  width: '10vw',
});
</script>

<style scoped lang="scss">
.card {
	--card-height: v-bind(height);
	--card-width: v-bind(width);
	background: white;
	width: var(--card-width);
	height: var(--card-height);
	padding: 3px;
	position: relative;
	border-radius: 6px;
	cursor: pointer;
	&::before, &::after{
		content: " ";
		position: absolute;
		z-index: -1;
		animation: spin 2.5s linear infinite;
		background-image: linear-gradient(var(--rotate), black, black, black);
		transition: all 0.5s ease-in-out;
	}
	&:hover::before, &:hover::after{
		background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
	}
	&::before{
		width: 104%;
		height: 102%;
		top: -1%;
		left: -2%;
		border-radius: 8px;
	}
	&:hover::after {
		width: 100%;
		height: 100%;
		top: calc(var(--card-height) / 6);
		left: 0;
		right: 0;
		margin: 0 auto;
		transform: scale(0.8);
		filter: blur(calc(var(--card-height) / 6));
		opacity: 1;
		transition: opacity .5s;
	}
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
</style>
