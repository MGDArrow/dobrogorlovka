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
}

withDefaults(defineProps<Props>(), {
  active: false
});
</script>

<style scoped lang="scss">
.blocks{
	--border-block: 4px;
	position: absolute;
	transform: rotateZ(-20deg) translateY(-115%) translateX(0);
	z-index: -1;
	& div {
		width: 3400px;
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
		@media screen and (max-width: 1599px) {
			height: 43px;
		}
		@media screen and (max-width: 1199px) {
			height: 37px;
		}
		@media screen and (max-width: 768px) {
			height: 50px;
		}
	}
}
.active div{
	background-position: 0 0;
}
</style>
