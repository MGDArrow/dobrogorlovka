<template>
	<UiPopup @close-popup="emit('closePopup')">
		<div class="team-card-popup">
			<img :src="`persons/${persona.photo}_full.webp`" :alt="persona.surname">
			<div class="team-card-popup__content">
				<TeamName>
					<p class="team-card-popup__title"><strong>{{ persona.surname }}</strong> {{ persona.name }}</p>
				</TeamName>
				<p>{{ persona.description }}</p>
				<TeamName>
					<p><span>{{ persona.post }}</span></p>
				</TeamName>
			</div>
			
		</div>
	</UiPopup>
</template>

<script setup lang="ts">
import type { IPersona } from '~/types/types';

interface Props {
  persona: IPersona;
}

defineProps<Props>();

const emit = defineEmits<{
  closePopup: [];
}>();
</script>

<style scoped lang="scss">
.team-card-popup{
	text-align: center;
	display: flex;
	align-items: center;
	gap: 30px;
	& img{
		height: 600px;
	}
	&__content{
		font-size: 1.2em;
		max-height: 600px;
		width: 800px;
	}
	&__title{
		font-size: 1.2em;
	}
}
</style>
