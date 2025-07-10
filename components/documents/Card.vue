<template>
	<div class="document-card" @mouseover="isHover = true" :class="{active: isHover}">
		<p>
			<slot />
		</p>
		<div class="document-card__download">
			<img src="../../public/download.webp" alt="download">
		</div>

		<div class="document-card__size">{{ size }}</div>
	</div>
</template>

<script setup lang="ts">
defineSlots<{
	default: string;
}>();

interface Props {
	size: string;
}

defineProps<Props>();

const isHover = ref(false)
</script>

<style scoped lang="scss">
.document-card {
	width: calc(100% / 2 - 15px - 8px - 30px);
	border: 4px solid var(--color-black);
	padding: 25px 15px;
	border-radius: var(--border-radius);
	position: relative;
	cursor: pointer;
	font-weight: 700;
	transition: 0.4s ease-in-out;

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
	}

	&.active {

		&:nth-child(1n) {
			border-color: var(--color-green);
			color: var(--color-green);

			& .document-card__size, .document-card__download {
				background: var(--color-green);
			}
		}

		&:nth-child(2n) {
			border-color: var(--color-blue);
			color: var(--color-blue);

			& .document-card__size, .document-card__download {
				background: var(--color-blue);
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
