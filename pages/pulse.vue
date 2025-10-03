<template>
  <section id="block">
    <ClientOnly>
      <MenuClient :menu />
    </ClientOnly>
    <div class="project__updeck">
      <ProjectsImage :photo-src="project.photo" />
      <div class="project__info point" id="about">
        <ProjectsName>
          <h2>{{ project.name }}</h2>
          <span>{{ project.subname }}</span>
        </ProjectsName>
        <ProjectsDate>
          <strong>Реализация проекта:</strong><span>{{ project.date }}</span>
        </ProjectsDate>
        <ProjectsDescription>
          <p v-for="(descript, index) in project.description" :key="index">
            {{ descript }}
          </p>
          <p class="quote">
            <strong>Донация</strong> — добровольная сдача крови и (или) её
            компонентов.
          </p>
        </ProjectsDescription>
      </div>
    </div>
    <Partners
      :title="'Партнёры проекта'"
      :partners="project.partners"
      class="project-partners point"
      id="partners"
    />
    <ProjectsStep
      :title="'Сдача 1: '"
      :subtitle="'День защиты детей 2025'"
      :date="'01.06.2025'"
      :status="'Активный'"
      id="step1"
      class="point"
    >
      <p>
        1 июня – наши активисты присоединись к донации, приуроченной ко дню
        защиты детей.
      </p>
      <p>
        Мы гордимся нашими отважными донорами, которые нашли время и проявили
        настоящее милосердие!
      </p>
      <ProjectsPhotos :photos="photos.step1" :photos-all="photosAll" />
    </ProjectsStep>
  </section>
</template>

<script setup lang="ts">
  import { getAllPhoto, PULSE as project } from '~/assets/env';
  import MenuClient from '~/components/projects/Menu.client.vue';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Партнёры проекта', id: 'partners' },
    { name: 'Сдача 1', id: 'step1' },
  ];

  const photos = project.photos;
  const photosAll = getAllPhoto(project.photos);
</script>

<style scoped lang="scss"></style>
