<template>
  <section class="partners" id="partners">
	<h2>Наши партнёры</h2>
	<div class="partners__wrapper" ref="parentRef">
		<div class="partners__cards">
			<PartnersCard 
				v-for="partner in partners" 
				:key="partner.name" 
				:photoSrc="`partners/${partner.photo}.webp`"
				:parent="parentRef"
				>
				{{ partner.name }}
			</PartnersCard>
		</div>
	</div>
	
  </section>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';

const partners = ENV.partners;


const parentRef = useTemplateRef('parentRef');
</script>

<style scoped lang="scss">
.partners{
	&__wrapper{
		width: 100%;
		@media screen and (max-width: 768px) {
			position: relative;
			width: calc(98vw - 40px);
			margin: 0 auto;
			overflow-y: auto;
		}
	}
  &__cards{
	width: 80%;
	align-items: center;
	height: 460px;
	margin: 20px auto;
	display: flex;
	gap: 20px;
	justify-content: space-evenly;
	@media screen and (max-width: 1599px) {
		width: 100%;
	}
	@media screen and (max-width: 1199px) {
		gap: 5px;
		height: 390px;
	}
	@media screen and (max-width: 768px) {
		gap: 5px;
		height: 460px;
		width: calc(98vw - 40px);
		width: max-content;
	}
  }
}
</style>
