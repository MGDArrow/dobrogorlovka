<template>
	<div class="about-card-wrapper" :class="{ active: isHover }" >
		<div class="about-card" @mouseover="isHover = true" >
				<slot />
		</div>
	</div>
</template>

<script setup lang="ts">
defineSlots<{
	default: string;
}>();

const isHover = ref(false);

function getRandomColor() {
	const number = Math.random();
	return number > 0.75 ? 'var(--color-pink)' : number > 0.5 ? 'var(--color-green)' : number > 0.25 ? 'var(--color-blue)' : 'var(--color-orange)';
}
</script>

<style scoped lang="scss">
.about-card-wrapper {
	--angle: 0deg;
	height: calc(100% - 90px);
	width: calc(100% - 90px);
	cursor: pointer;
	justify-content: center;
	display: flex;
	align-items: center;
	border-radius: var(--border-radius);
	border: 4px solid var(--color-black);
	background-image: conic-gradient(v-bind(getRandomColor()) var(--angle), var(--color-white) var(--angle) 360deg);
	transition: width 0.1s, height 0.1s, transform 0.4s ease-in-out;
	&.active {
		transition: width 0.4s, height 0.4s, transform 0.4s ease-in-out;
		animation: 0.4s rotate linear;
		animation-fill-mode: forwards;
		height: calc(100% - 90px);
		width: calc(100% - 90px);
	
	}
	&:hover{
		transform: scale(1.05);
	}

	@keyframes rotate {
		to {
			--angle: 360deg;
		}
	}
}

.about-card {
	height: inherit;
	width: inherit;
	border: 4px solid var(--color-black);
	border-radius: var(--border-radius);
	padding: 20px;

	background: var(--color-white);
	transition: 0.4s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
