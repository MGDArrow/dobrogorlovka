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
    <ProjectsStep
      :title="'Шаг 1. Старт: '"
      :subtitle="'от идеи к заявке'"
      :date="'16.03.2025 — 15.06.2025'"
    >
      <h4>
        Какие проблемы стали причиной рождения идеи написания грантовой заявки?
      </h4>
      <p>
        В современном мире уверенное владение компьютером — это не просто
        удобный навык, а необходимость. Однако для многих подростков, особенно
        из многодетных семей, доступ к цифровым знаниям остается ограниченным.
        Именно с этой проблемой столкнулась «ДоброГорловка», работая с
        незащищенными слоями населения.
      </p>
      <p>
        Родители в таких семьях, целиком посвящая себя заботе о материальном
        благополучии, часто не имеют возможности помочь детям с освоением
        digital-навыков. В результате старшеклассники оказываются предоставлены
        сами себе и могут отставать от сверстников, что в будущем затрудняет их
        поступление в вузы и построение карьеры.
      </p>
      <p>
        Масштаб проблемы подтвердил социологический опрос, проведенный среди
        проведенном среди десяти представителей целевой аудитории. Его
        результаты:
      </p>
      <ul>
        <li>
          Несмотря на то, что <UiStrong>у 80% опрошенных</UiStrong> дома есть
          компьютер или ноутбук, лишь половина знает, как изменить шрифт в
          документе Word;
        </li>
        <li>
          Создавать презентации в PowerPoint умеют
          <UiStrong>только 30%</UiStrong>;
        </li>
        <li>
          Самый тревожный показатель — никто не знал, что табличный редактор
          Excel умеет проводить математические расчеты автоматически;
        </li>
        <li>
          При этом <UiStrong>90% ребят</UiStrong> выразили желание научиться
          работать с офисными программами.
        </li>
      </ul>
      <h4>Почему реализация проекта поможет в решении проблем?</h4>
      <p>
        Эти цифры стали отправной точкой для создания нового социального проекта
        —
        <UiStrong
          >«Цифровой иммунитет: учись, играй, будь в безопасности»</UiStrong
        >. Проект ставит перед собой задачу научить детей из многодетных семей,
        обучающихся в 8-11 классах общеобразовательных школ города Горловки
        Донецкой Народной Республики и не имеющих навыков работы с офисными
        программами Microsoft Office, создавать, редактировать и форматировать
        текстовые документы, работать с таблицами, проводить расчеты и
        анализировать данные, создавать презентации, визуализировать информацию
        и выступать с докладами, а также обучить их основам кибербезопасности.
      </p>
      <p>В ходе проекта мы:</p>
      <ul>
        <li>
          Проведем подготовительную работу по проведению обучающего курса;
        </li>
        <li>
          Обучим детей работе с программами Microsoft Office, физическим
          упражнениям для защиты здоровья при длительной работе за компьютером и
          основам кибербезопасности, православной нравственности,
          противодействию кибербуллингу.
        </li>
      </ul>
      <p>
        Финалом обучения станет презентация собственных проектов, где каждый
        участник сможет блеснуть новыми знаниями. Полученные навыки — это не
        просто галочка, а реальный «цифровой иммунитет», который в будущем
        пригодится для поступления в средние и высшие учебные заведения, а также
        при трудоустройстве.
      </p>
      <p>
        Реализация этого важного проекта стала возможной благодаря поддержке
        Фонда Президентских грантов, который поверил в идею и выделил средства
        на ее воплощение. Это инвестиция в будущее молодого поколения Донецкой
        Народной Республики.
      </p>
      <ProjectsPhotos :photos="DIGITAL.photos.step1" />
    </ProjectsStep>
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
          flex: 1;
          max-width: 500px;
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
