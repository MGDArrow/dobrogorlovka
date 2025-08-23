<template>
  <section class="projects" id="projects">
	<h2>Наши проекты</h2>
	<div class="projects__cards">
		<ProjectsCard :photoSrc="`projects/digital.webp`">
			<TeamName>
				<p><strong>Цифровой иммунитет</strong> Учись, Играй, Будь в безопасности</p>
				<span>
					Проект по обучению детей из многодетных семей навыкам пользования офисных программ, основам кибербезопасности, противостояния кибербуллингу и закладывание в подростков идей о морали в интернете.
				</span>
			</TeamName>
		</ProjectsCard>
		<ProjectsCard :photoSrc="`projects/pulse.webp`">
			<TeamName>
				<p><strong>Пульс Добра</strong></p>
				<span>Проект систематических акций по сдаче донорской крови и её компонентов, которые призваны повысить количество потенциальных доноров среди молодёжи. </span>
			</TeamName>
		</ProjectsCard>
	</div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.projects__cards{
	margin: 20px auto;
    display: flex;
    gap: 40px;
    width: 80%;
    @media screen and (max-width: 1599px) {
		width: 1100px;
    }
    @media screen and (max-width: 1199px) {
		width: 730px;
    }
    @media screen and (max-width: 768px) {
		width: 100%;
		display: block;
    }
}
</style>
