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
          <p>Как это работает?</p>
          <UiList>
            <li>
              Заказы на стирку принимаются по предварительной записи через
              сайт/бот для того, чтобы избежать столпотворений людей и живых
              очередей;
            </li>
            <li>
              На заранее забронированное время можно принести вещи, не тратя
              впустую время ожидания, и через условленное время можно забрать
              уже постиранные вещи;
            </li>
            <li>
              Все процессы стирки будут осуществляют волонтёры «ДоброГорловки»;
            </li>
          </UiList>
        </ProjectsDescription>
      </div>
    </div>
    <!-- <Washing /> -->
    <Partners
      :title="'Партнёры проекта'"
      :partners="project.partners"
      class="project-partners point"
      id="partners"
    />
    <ProjectsStep
      :title="'Шаг 2. Установка.'"
      :subtitle="''"
      :date="'18.02.2026 – 19.04.2026'"
      :status="'Активный'"
      id="step2"
      class="point"
    >
      <p>
        Специалистами осуществляется превращение помещений в место, которое
        станет <UiStrong>благотворительной прачечной</UiStrong>:
      </p>
      <ul>
        <li>устанавливаются стиральные машины;</li>
        <li>к ним подводится вода и новая электрическая инфраструктура;</li>
        <li>
          устанавливаются емкости для воды, которая предоставляется безвозмездно
          Горловской епархией РПЦ;
        </li>
        <li>оборудуется место приема и выдачи белья;</li>
        <li>проводятся другие необходимые работы.</li>
      </ul>
      <ProjectsPhotos :photos="photos.step2" :photos-all="photosAll" />
    </ProjectsStep>
    <ProjectsStep
      :title="'Шаг 1. Закупка.'"
      :subtitle="''"
      :date="'18.02.2026'"
      :status="'Завершённый'"
      id="step1"
      class="point"
    >
      <p>
        Благотворителями закуплены стиральные машины и необходимое оборудование
        для их установки и монтажа.
      </p>
      <p>
        Они силами <UiStrong> «Народного Фронта» </UiStrong> в ДНР были
        доставлены и загружены на место будущей прачечной.
      </p>
      <ProjectsPhotos :photos="photos.step1" :photos-all="photosAll" />
    </ProjectsStep>
  </section>
</template>

<script setup lang="ts">
  import MenuClient from '~/components/projects/Menu.client.vue';
  import { WASHING as project } from '~/content/washing.project';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Партнёры проекта', id: 'partners' },
    { name: 'Шаг 2. Установка', id: 'step2' },
    { name: 'Шаг 1. Закупка', id: 'step1' },
  ];

  const photos = project.photos;
  const photosAll = getAllPhoto(project.photos);
</script>

<style scoped lang="scss"></style>
