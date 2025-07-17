<template>
	<a :href="href" target="_blank" rel="noopener noreferrer" class="document-card" @mouseover="isHover = true" :class="{active: isHover}">
		<p>
			<slot />
		</p>
		<div class="document-card__download">
			<img :src="`/${icon}.webp`" :alt="icon">
		</div>

		<div v-if="size !== null" class="document-card__size">{{ size }}</div>
	</a>
</template>

<script setup lang="ts">
defineSlots<{
	default: string;
}>();

interface Props {
  size?: string | null;
  icon?: string;
  href: string;
}

withDefaults(defineProps<Props>(), {
  size: null,
  icon: 'download'
});

const isHover = ref(false)
</script>

<style scoped lang="scss">
.document-card {
	display: flex;
	width: calc(100% / 2 - 15px - 8px - 30px);
	border: 4px solid var(--color-black);
	color: var(--color-black);
	padding: 25px 15px;
	border-radius: var(--border-radius);
	position: relative;
	cursor: pointer;
	font-weight: 600;
	transition: 0.4s ease-in-out;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: calc(98vw - 40px - 30px);
		padding: 25px 10px;
	}

	& p {
		padding-left: 80px;
	}

	&__download {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 80px;
		background: var(--color-black);
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.4s ease-in-out;

		& img {
			height: 50%;
		}
	}

	&__size {
		font-weight: 400;
		position: absolute;
		right: 0;
		top: 0;
		background: var(--color-black);
		color: var(--color-white);
		padding: 4px 8px;
		border-radius: 0 0 0 10px;
		transition: 0.4s ease-in-out;
		font-size: 0.8em;
	}
	&:hover{
		transform: scale(1.04);
		width: calc(100% / 2 - 15px - 8px - 65.5px);
		padding: 25px 15px 25px 50px;

		@media screen and (max-width: 1199px) {
			width: calc(100% / 2 - 15px - 8px - 30.5px);
			padding: 25px 15px 25px 15px;
		}
		@media screen and (max-width: 768px) {
			width: unset;
			padding: 25px 15px 25px 15px;
		}
	}

	&.active {

		&:nth-child(1n) {
			border-color: var(--color-blue);
			color: var(--color-blue);
	
			& .document-card__size, .document-card__download {
				background: var(--color-blue);
			}
		}
		
		&:nth-child(2n) {
			border-color: var(--color-green);
			color: var(--color-green);
	
			& .document-card__size, .document-card__download {
				background: var(--color-green);
			}
		}

		&:nth-child(3n) {
			border-color: var(--color-orange);
			color: var(--color-orange);

			& .document-card__size, .document-card__download {
				background: var(--color-orange);
			}
		}

		&:nth-child(4n) {
			border-color: var(--color-pink);
			color: var(--color-pink);

			& .document-card__size, .document-card__download {
				background: var(--color-pink);
			}
		}
	}
}
</style>
