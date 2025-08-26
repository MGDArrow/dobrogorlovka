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
    <div class="project__updeck">
      <div class="project__info">
        <ProjectsFinance
          :title="'Финансирование проекта'"
          :data="DIGITAL.finance"
        />
      </div>
      <img
        src="/public/partners/pgrants_vertical.webp"
        alt="При поддержке Фонда Президентских Грантов"
        class="pgrants-vertical"
      />
      <img
        src="/public/partners/pgrants_horizontal.png"
        alt="При поддержке Фонда Президентских Грантов"
        class="pgrants-horizontal"
      />
      <!-- <ProjectsImage :photo-src="DIGITAL.photo" /> -->
    </div>
    <Team
      :title="'Команда проекта'"
      :big-cards="bigCards"
      :small-cards="smallCards"
    />
    <Partners
      :title="'Партнёры проекта'"
      :partners="DIGITAL.partners"
      class="project-partners"
    />
  </section>
</template>

<script setup lang="ts">
  import { ProjectsFinance } from '#components';
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
      & > img {
        display: block;
        width: 300px;
        border: 4px solid var(--color-black);
        border-radius: var(--border-radius);
        transition: 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
        @media screen and (max-width: 1199px) {
          width: 200px;
        }
        @media screen and (max-width: 768px) {
          width: min(100%, 500px);
          margin: 0 auto;
        }
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
    }
    &-partners {
      font-size: 0.85em;
    }
  }

  .pgrants {
    &-vertical {
      @media screen and (max-width: 768px) {
        display: none !important;
        visibility: hidden;
      }
    }
    &-horizontal {
      @media screen and (min-width: 769px) {
        display: none !important;
        visibility: hidden;
      }
    }
  }
</style>
