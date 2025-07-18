<template>
	<div class="partners-card-wrapper" :class="{ active: isHover }" ref="activeRef" >
		<div class="partners-card" @mouseover="isHover = true" :class="{ active: isHover }">
			<img :src="photoSrc" alt="Фото" :class="{ active: isHover }" />
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
	parent: HTMLDivElement | null
}
const props = defineProps<Props>();


const isHover = ref(false);


const activeRef = useTemplateRef('activeRef');

onUnmounted(() => {
	if(props.parent === null) return;
	document.removeEventListener('scroll', () => scrollActivationLeft(activeRef.value, props.parent, isHover))
	props.parent.removeEventListener('scroll', () => scrollActivationLeft(activeRef.value, props.parent, isHover))
})

watch(() => props.parent, ()=> {
	if(props.parent === null) return;
	document.addEventListener('scroll', () => scrollActivationLeft(activeRef.value, props.parent, isHover))
	props.parent.addEventListener('scroll', () => scrollActivationLeft(activeRef.value, props.parent, isHover))
})
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
		height: 480px;
		width: 360px;
	}
	@media screen and (max-width: 1199px) {
		height: 200px;
		width: 200px;
		&.active{
			height: 370px;
			width: 240px;		
		}
	}

	@media screen and (max-width: 768px) {
		height: 250px;
		width: 250px;
		&.active{
			height: 330px;
			width: 310px;		
		}
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

		&.active{
			filter: grayscale(0%);
		}

		@media screen and (max-width: 1199px){
			width: 200px;
		}

		@media screen and (max-width: 768px){
			width: 250px;
		}
	}

	& p {
		height: 0;
		overflow-y: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2em;
		transition: 0.4s ease-in-out;
		text-align: center;

		&.active {
			height: 100px;
		}
	}

	&:hover {
		height: 420px;
	}

	@media screen and (max-width: 1199px){
		height: 200px;
		width: 200px;
		&:hover{
			height: 310px;
		}
	}
	@media screen and (max-width: 768px){
		height: 250px;
		width: 250px;
		&.active{
			height: 370px;
		}
	}
}
</style>
