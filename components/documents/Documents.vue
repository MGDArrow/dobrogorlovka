<template>
  <div class="documents">
	<h2>Документы организации</h2>
	<h3>Учредительные документы</h3>
	<div class="documents__cards">
		<DocumentsCard :size="'3.16 MB'">Устав</DocumentsCard>
		<DocumentsCard :size="'127.3 KB'">ЕГРЮЛ</DocumentsCard>
		<DocumentsCard :size="'244.4 KB'">Свидетельство о постановке на учёт</DocumentsCard>
		<DocumentsCard :size="'426.4 KB'">Свидетельство о ГРНО</DocumentsCard>
	</div>
	<h3>Отчёты</h3>
	<div class="documents__cards">
		<DocumentsCard :size="'3.16 MB'">Отчёт 2024 год</DocumentsCard>
	</div>
  </div>
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
  }
}
</style>
