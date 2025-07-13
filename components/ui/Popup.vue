<template>
  <div class="popup">
	<div class="popup__bg" @click="emit('closePopup')"></div>
	<div class="popup__body">
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
		width: 800px;
		padding: 20px 40px 20px 20px;
		border: 4px solid var(--color-black);
		border-radius: var(--border-radius);
		background: var(--color-white);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}
}
</style>
