<template>
  <section class="documents" id="docs">
	<h2>Документы организации</h2>
	<h3 v-if="docs.length">Учредительные документы</h3>
	<div class="documents__cards" >
		<DocumentsCard v-for="doc in docs" :key="doc.name" 
			:size="doc.size" :href="`/docs/${doc.link}.pdf`" download>
				{{ doc.name }}
		</DocumentsCard>
	</div>
	<h3 v-if="reports.length">Отчёты</h3>
	<div class="documents__cards" >
		<DocumentsCard v-for="report in reports" :key="report.name" 
			:size="report.size" :href="`/docs/${report.link}.pdf`" download>
				{{ report.name }}
		</DocumentsCard>
	</div>
  </section>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';


const docs = ENV.docs;
const reports = ENV.reports;

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
