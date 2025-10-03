<template>
  <section class="projects" id="projects">
    <h2>Наши проекты</h2>
    <div class="projects__cards">
      <div class="projects__cards-full">
        <ProjectsCard
          :photoSrc="`projects/digital.webp`"
          :status="'Активный'"
          @click="setRoute('digital')"
        >
          <TeamName>
            <p>
              <strong>Цифровой иммунитет</strong> Учись, Играй, Будь в
              безопасности
            </p>
            <span>
              Проект по обучению детей из многодетных семей навыкам пользования
              офисных программ, основам кибербезопасности, противостояния
              кибербуллингу и закладывание в подростков идей о морали в
              интернете
            </span>
          </TeamName>
        </ProjectsCard>
      </div>
      <ProjectsCard
        :photoSrc="`projects/pulse.webp`"
        :status="'Активный'"
        @click="setRoute('pulse')"
      >
        <TeamName>
          <p><strong>Пульс Добра</strong></p>
          <span
            >Проект систематических акций по сдаче донорской крови и её
            компонентов, которые призваны повысить количество потенциальных
            доноров среди молодёжи
          </span>
        </TeamName>
      </ProjectsCard>
      <ProjectsCard
        :photoSrc="`projects/rill.webp`"
        :status="'Активный'"
        @click="setRoute('rill')"
      >
        <TeamName>
          <p><strong>Родник Добра</strong></p>
          <span
            >Проект по помощи городу в обеспечении водой населения ввиду трудной
            ситуации с водоснабжением
          </span>
        </TeamName>
      </ProjectsCard>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { setLoading } from '~/assets/env';

  function setRoute(route: string) {
    setLoading();
    setTimeout(() => useRouter().push(route), 1000);
  }
</script>

<style scoped lang="scss">
  .projects__cards {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    width: 80%;
    @media screen and (max-width: 1599px) {
      width: 1100px;
    }
    @media screen and (max-width: 1199px) {
      width: 730px;
    }
    @media screen and (max-width: 768px) {
      width: calc(98vw - 40px);
      display: block;
    }
  }
</style>
