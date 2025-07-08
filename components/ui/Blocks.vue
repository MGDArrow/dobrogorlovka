<template>
	<div class="blocks" :class="{active}">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean;
  translateY?: string;
  translateX?: string;
  rotateZ?: string; 
}

withDefaults(defineProps<Props>(), {
  active: false,
  translateX: '0',
  translateY: '-115%',
  rotateZ: '-20deg'
});
</script>

<style scoped lang="scss">
.blocks{
--border-block: 4px;
position: absolute;
transform: rotateZ(v-bind(rotateZ)) translateY(v-bind(translateY)) translateX(v-bind(translateX));
z-index: -1;
	& div {
		width: 700px;
		height: 50px;
		border: var(--border-block) solid var(--color-black);
		background-position: 0 0;
		background-size: 200% 200%;
		background-position: 100% 0;
		&:nth-child(1){
		background-image: linear-gradient(to right, var(--color-pink) 50%, var(--color-white) 50%);
		transition: 1.2s;
		}
		&:nth-child(2){
		background-image: linear-gradient(to right, var(--color-orange) 50%, var(--color-white) 50%);
		transition: 0.9s;
		}
		&:nth-child(3){
		background-image: linear-gradient(to right, var(--color-blue) 50%, var(--color-white) 50%);
		transition: 0.6s;
		}
		&:nth-child(4){
		background-image: linear-gradient(to right, var(--color-green) 50%, var(--color-white) 50%);
		border-bottom: calc(var(--border-block) * 2) solid var(--color-black);
		transition: 0.3s;
		}
	}
}
.active div{
	background-position: 0 0;
}
</style>
