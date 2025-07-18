<template>
	<div class="about-card-wrapper" :class="{ active: isHover }"  ref="activeRef">
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

const activeRef = useTemplateRef('activeRef');

onMounted(() => {
	document.addEventListener('scroll', () => scrollActivation(activeRef.value, isHover))
})

onUnmounted(() => {
	document.removeEventListener('scroll', () => scrollActivation(activeRef.value, isHover))
})
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
	}
	&:hover{
		transform: scale(1.05);
	}
	@media screen and (max-width: 1199px) {
		height: calc(100% - 70px);
		width: calc(100% - 70px);
	}

	@media screen and (max-width: 768px) {
		height: calc(100% - 20px);
		width: calc(100% - 20px);
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
	@media screen and (max-width: 1199px) {
		padding: 10px;
	}
	@media screen and (max-width: 768px) {
		height: calc(100% - 40px);
		width: calc(100% - 40px);
	}
}
</style>
