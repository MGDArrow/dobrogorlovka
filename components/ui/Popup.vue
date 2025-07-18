<template>
  <div class="popup">
	<div class="popup__bg" @click="emit('closePopup')"></div>
	<div class="popup__body">
		<div class="popup__close" @click="emit('closePopup')">
			Закрыть
		</div>
		
		<slot/>
	</div>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: string;
}>();

const emit = defineEmits<{
  closePopup: [];
}>();

function closePostEscape(event: KeyboardEvent){
	if (event.key === 'Escape') emit('closePopup');
}

onMounted(() => {
	document.addEventListener('keydown', e => closePostEscape(e))
})
onUnmounted(() => {
	document.removeEventListener('keydown', e => closePostEscape(e))
})


</script>

<style scoped lang="scss">
.popup {
	width: 100vw;
	height: 100dvh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	&__bg {
		width: 100%;
		height: 100%;
		background: var(--color-white);
		opacity: 0.7;
	}
	&__body {
		max-width: 90vw;
		padding: 20px;
		border: 4px solid var(--color-black);
		border-radius: var(--border-radius);
		background: var(--color-white);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
		@media screen and (max-width: 768px) {
			width: calc(100vw - 28px);
			border-radius: unset;
			max-width: 100vw;
			height: calc(100dvh - 58px);
			padding: 40px 10px 10px;
			top: 0;
			left: 0;
			transform: unset;
			overflow-y: auto;
		}
		&::-webkit-scrollbar {
			width: 4px;
		}
		&::-webkit-scrollbar-track {
			background: var(--color-black);
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--color-white);
			border-radius: 15px;
		}

	}
	&__close{
		display: none;
		@media screen and (max-width: 768px) {
			height: 30px;
			background-color: lightgrey;
			opacity: 0.8;
			position: fixed;
			z-index: 11;
			top: 4px;
			left: 4px;
			width: calc(100vw - 8px);
			text-transform: uppercase;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
