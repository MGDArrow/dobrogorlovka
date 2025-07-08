<template>
	<div class="partners-card-wrapper" :class="{ active: isHover }" >
		<div class="partners-card" @mouseover="isHover = true" @mouseleave="isHover = false">
			<img :src="photoSrc" alt="Фото" />
			<p :class="{ active: isHover }">
				<slot />
			</p>
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

function getRandomColor() {
	const number = Math.random();
	return number > 0.75 ? 'var(--color-pink)' : number > 0.5 ? 'var(--color-green)' : number > 0.25 ? 'var(--color-blue)' : 'var(--color-orange)';
}
</script>

<style scoped lang="scss">
.partners-card-wrapper {
	--angle: 0deg;
	height: 300px;
	width: 300px;
	justify-content: center;
	display: flex;
	align-items: center;
	border-radius: var(--border-radius);
	border: 4px solid var(--color-black);
	background-image: conic-gradient(v-bind(getRandomColor()) var(--angle), var(--color-white) var(--angle) 360deg);
	transition: width 0.1s, height 0.1s;
	&.active {
		transition: width 0.4s, height 0.4s;
		animation: 0.4s rotate linear;
		animation-fill-mode: forwards;
		height: 460px;
		width: 360px;
	}

	@keyframes rotate {
		to {
			--angle: 360deg;
		}
	}
}

.partners-card {
	width: 300px;
	height: 300px;
	border: 4px solid var(--color-black);
	border-radius: var(--border-radius);
	cursor: pointer;
	background: var(--color-white);
	transition: 0.4s ease-in-out;

	& img {
		width: 300px;
		transition: 0.4s ease-in-out;
		filter: grayscale(100%);
	}

	& p {
		height: 0;
		overflow-y: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 600;
		font-size: 1.2em;
		transition: 0.4s ease-in-out;
		text-align: center;

		&.active {
			height: 100px;

		}
	}

	&:hover {
		height: 400px;

		& img {
			filter: grayscale(0%);
		}
	}
}
</style>
