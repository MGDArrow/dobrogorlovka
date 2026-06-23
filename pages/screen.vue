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
          <UiList>
            <li>1. Преодоление кризисов;</li>
            <li>2. Профилактика девиантного поведения в молодёжной среде;</li>
            <li>3. Смысложизненные ориентиры;</li>
            <li>4. Поддержка в трудные жизненные минуты.</li>
          </UiList>
        </ProjectsDescription>
      </div>
    </div>
    <div class="project__updeck">
      <div
        class="project__info point"
        id="finance"
        style="scroll-margin-block-start: 50px"
      >
        <ProjectsFinance
          :title="'Финансирование проекта'"
          :data="project.finance"
        />
      </div>
      <NuxtImg
        src="/partners/pgrants_vertical.webp"
        alt="При поддержке Фонда Президентских Грантов"
        class="pgrants-vertical"
      />
      <NuxtImg
        src="/partners/pgrants_horizontal.png"
        alt="При поддержке Фонда Президентских Грантов"
        class="pgrants-horizontal"
      />
    </div>
    <WidgetScreenTeam />
    <WidgetScreenPartners />

    <ProjectsSteps id="steps" class="point" :h1="'Шаги проекта'">
      <ProjectsStep
        :title="'Шаг 1. Старт: '"
        :subtitle="'от идеи к заявке'"
        :date="'16.03.2026 — 22.06.2026'"
      >
        <h4>
          Какие проблемы стали причиной рождения идеи написания грантовой
          заявки?
        </h4>
        <p>
          Проект «Экран Добра» направлен на решение острой социальной проблемы
          жителей шести малых городов ДНР (Горловка, Шахтерск, Енакиево,
          Ждановка, Дебальцево, Кировское) — отсутствие доступной, анонимной и
          доверительной психологической поддержки для населения, пережившего
          военные действия и многолетнюю нестабильность. Актуальность
          подтверждается официальными данными: согласно статистике Минздрава РФ,
          <UiStrong
            >с июня 2023 по февраль 2025 года за психиатрической помощью
            обратилось более 80 тыс. участников боевых действий и членов их
            семей, у 20% военнослужащих диагностировано ПТСР </UiStrong
          >.
        </p>
        <p>
          Население малых городов ДНР, находящееся в зоне хронического стресса,
          не обращается к специалистам из-за страха стигматизации, финансовых
          трудностей и недоверия к официальным институтам. Молодежь региона
          испытывает ценностную дезориентацию, что создает риски вовлечения в
          деструктивные идеологии. Публичные пространства (остановки,
          автостанции), где люди проводят время вынужденного ожидания, сегодня
          остаются либо пустыми, либо заполненными агрессивной рекламой, упуская
          возможность стать источником поддержки.
        </p>

        <h4>Почему реализация проекта поможет в решении проблем?</h4>
        <p>
          Проект предлагает следующее решение: установка
          <UiStrong>7 уличных телеэкранов</UiStrong> на ключевых остановочных
          комплексах для круглосуточной трансляции
          <UiStrong>40 тематических видеороликов</UiStrong> с участием
          авторитетных экспертов — священнослужителей РПЦ, имеющих опыт работы с
          кризисными ситуациями и военнослужащими. Темы роликов охватят
          преодоление жизненных кризисов, сохранение семьи, поиск смыслов,
          поддержку ветеранов. Проект превращает места ожидания в
          <UiStrong>«точки социального внимания»</UiStrong>, наполняя среду
          созидательным контентом и создавая устойчивую инфраструктуру поддержки
          для жителей.
        </p>

        <!-- <ProjectsPhotos :photos="photos.step1" :photos-all="photosAll" /> -->
      </ProjectsStep>
    </ProjectsSteps>
  </section>
</template>

<script setup lang="ts">
  import MenuClient from '~/components/projects/Menu.client.vue';
  import { DIGITAL as project } from '~/content/screen.project';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Финансирование проекта', id: 'finance' },
    { name: 'Команда проекта', id: 'team' },
    { name: 'Партнёры проекта', id: 'partners' },
    { name: 'Шаги проекта', id: 'steps' },
  ];

  const photos = project.photos;

  const photosAll = getAllPhoto(project.photos);
</script>

<style scoped lang="scss"></style>
