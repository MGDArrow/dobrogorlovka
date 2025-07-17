<template>
  <section class="partners" id="partners">
	<h2>Наши партнёры</h2>
	<div class="partners__cards">
		<PartnersCard 
			v-for="partner in partners" 
			:key="partner.name" 
			:photoSrc="`partners/${partner.photo}.webp`">
			{{ partner.name }}
		</PartnersCard>
	</div>
  </section>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';

const partners = ENV.partners;
</script>

<style scoped lang="scss">
.partners{
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
  }
}
</style>
