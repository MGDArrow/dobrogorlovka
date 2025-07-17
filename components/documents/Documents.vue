<template>
  <section class="documents" id="docs">
	<h2>Документы организации</h2>
	<h3>Учредительные документы</h3>
	<div class="documents__cards">
		<DocumentsCard :size="'3.16 MB'" :href="'/'">Устав</DocumentsCard>
		<DocumentsCard :size="'127.3 KB'" :href="'/'">ЕГРЮЛ</DocumentsCard>
		<DocumentsCard :size="'244.4 KB'" :href="'/'">Свидетельство о постановке на учёт</DocumentsCard>
		<DocumentsCard :size="'426.4 KB'" :href="'/'">Свидетельство о ГРНО</DocumentsCard>
	</div>
	<h3>Отчёты</h3>
	<div class="documents__cards">
		<DocumentsCard :size="'3.16 MB'" :href="'/'">Отчёт 2024 год</DocumentsCard>
	</div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.documents{
	&__cards{
		width: 80%;
		margin: 20px auto;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		@media screen and (max-width: 1599px) {
			width: 1100px;
			font-size: 0.8em;
		}
		@media screen and (max-width: 1199px) {
			width: 750px;
		}
		@media screen and (max-width: 768px) {
			width: calc(98vw - 40px);
			flex-direction: column;
			gap: 20px;
		}
		
  	}
}
</style>
