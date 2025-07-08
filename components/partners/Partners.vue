<template>
  <section class="partners">
	<h2>Наши партнёры</h2>
	<div class="partners__cards">
		<PartnersCard :photoSrc="'partners/gorlovka.webp'">Горловская епархия</PartnersCard>
		<PartnersCard :photoSrc="'partners/onf.webp'">Народный фронт</PartnersCard>
		<PartnersCard :photoSrc="'partners/rostov.webp'">Милосердие-<br/>на-Дону</PartnersCard>
	</div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.partners{
  width: 100%;
//   min-height: 100dvh;
  &__cards{
	width: 80%;
	align-items: center;
	height: 460px;
	margin: 20px auto;
	display: flex;
	gap: 20px;
	justify-content: space-evenly;
  }
}
</style>
