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
      :title="'Розлив'"
      :subtitle="''"
      :date="'26.08.2025 – настоящий момент'"
      :status="'Активный'"
      id="step1"
      class="point"
    >
      <ProjectsPhotos :photos="photos.step1_1" :photos-all="photosAll" />
      <p>
        Обеспечение технической водой две точки раздачи на посёлке Кочегарка,
        путем привоза туда <UiStrong>9 тонн</UiStrong> воды через день.
      </p>
      <p>
        Воду обеспечивает нам
        <UiStrong>Горловская епархия Русской Православной Церкви</UiStrong>, мы
        же осуществляем её доставку на точки и розлив для людей.
      </p>
      <ProjectsPhotos :photos="photos.step1_2" :photos-all="photosAll" />
      <p>
        Мы благодарим тех благотворителей, которые не остаются в стороне и
        помогают в добром деле финансово. В этом проекте нашим партнером стала
        компания <UiStrong>ООО ПРО-ТОРГ</UiStrong>, которая помогает закрывать
        вопросы ГСМ и амортизации техники, за что им
        <UiStrong>огромное уважение и поклон</UiStrong>!
      </p>
    </ProjectsStep>
  </section>
</template>

<script setup lang="ts">
  import { RILL as project } from '~/assets/env';
  import MenuClient from '~/components/projects/Menu.client.vue';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Партнёры проекта', id: 'partners' },
    { name: 'Розлив', id: 'step1' },
  ];

  const photos = project.photos;
  const photosAll = [...photos.step1_1, ...photos.step1_2];
</script>

<style scoped lang="scss"></style>
