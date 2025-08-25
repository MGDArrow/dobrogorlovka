<template>
  <section class="digital">
    <div class="project__updeck">
      <ProjectsImage :photo-src="DIGITAL.photo" />
      <div class="project__info">
        <ProjectsName>
          <h2>{{ DIGITAL.name }}</h2>
          <span>{{ DIGITAL.subname }}</span>
        </ProjectsName>
        <ProjectsDate>
          <strong>Реализация проекта:</strong><span>{{ DIGITAL.date }}</span>
        </ProjectsDate>
        <!-- <img src="/public/partners/pgrants_horizontal.png" alt="При под" /> -->
        <ProjectsDescription>
          <p v-for="(descript, index) in DIGITAL.description" :key="index">
            {{ descript }}
          </p>
        </ProjectsDescription>
      </div>
    </div>
    <Team
      :title="'Команда проекта'"
      :big-cards="bigCards"
      :small-cards="smallCards"
    />
  </section>
</template>

<script setup lang="ts">
  import { DIGITAL } from '~/assets/env';

  const bigCards = DIGITAL.team;
  const smallCards = ref(
    DIGITAL.team.filter((persona) => persona.type === 'small'),
  );
</script>

<style scoped lang="scss">
  .project {
    &__updeck {
      display: flex;
      gap: 50px;
      align-items: center;
      @media screen and (max-width: 1599px) {
        gap: 30px;
      }
      @media screen and (max-width: 1199px) {
        gap: 20px;
      }
      @media screen and (max-width: 768px) {
        flex-wrap: wrap;
      }
    }
    &__info {
      flex: 1;
      @media screen and (max-width: 1199px) {
        font-size: 0.8em;
      }
      @media screen and (max-width: 768px) {
        font-size: 1em;
        width: 100%;
        flex: auto;
      }
      // & img {
      //   display: block;
      //   height: 100px;
      //   // margin: 0 auto;
      //   border: 4px solid var(--color-black);
      //   border-radius: var(--border-radius);
      // }
    }
  }
</style>
