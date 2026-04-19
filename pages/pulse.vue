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
    <div class="pulse-health">
      <div class="pulse-health__first">
        1
        <UiIcon :name="'first'" :size="'1em'" />
      </div>
      <div class="pulse-health__equally">
        <UiIcon :name="'equals'" :size="'1em'" />
      </div>
      <div class="pulse-health__pulse">
        467 <span>мл.</span>
        <UiIcon :name="'blood'" :size="'1em'" />
      </div>
      <div class="pulse-health__equally">
        <UiIcon :name="'equals'" :size="'1em'" />
      </div>
      <div class="pulse-health__health">
        3
        <UiIcon :name="'heart-pulse'" :size="'1em'" />
      </div>
      <div class="pulse-health__info">
        <p>Одна сдача цельной крови (467мл.) спасает 3-х человек:</p>
        <UiList>
          <li>эритроциты — для человека со значительной кровопотерей</li>
          <li>тромбоциты — для онкобольного</li>
          <li>
            плазма — для человека с тяжелыми ожогами или с тяжелым заболеванием
            печени
          </li>
        </UiList>
      </div>
    </div>
    <PulseAnons />
    <Partners
      :title="'Партнёры проекта'"
      :partners="project.partners"
      class="project-partners point"
      id="partners"
    />
    <ProjectsSteps
      id="steps"
      class="point"
      :h1="'Сдачи крови и новости проекта'"
    >
      <ProjectsStep
        :title="'Сдача 7: '"
        :subtitle="'Масленица'"
        :date="'16.02.2026 — 20.02.2026'"
        :status="'Завершена'"
      >
        <p>Акция приуроченная Масленице, в преддверии Великого Поста.</p>
        <p>
          Кровь сдавали <UiStrong>в Горловке, Енакиево и Шахтёрске</UiStrong>. К
          горловчанам присоединились
          <UiStrong>представители Республики Абхазия</UiStrong>, в том числе
          <UiStrong
            >музыканты Государственного оркестра народных инструментов имени
            Отара Хунцария</UiStrong
          >, которые приехали на Донбасс с концертами.
        </p>
        <p>
          Продолжаем помогать медикам и пациентам больниц
          <UiStrong>молитвой, словом и делом.</UiStrong>
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="35"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'first'"
            :number="9"
            :color="'var(--color-pink)'"
            >первичных доноров</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="16.3"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'heart-pulse'"
            :number="105"
            :color="'var(--color-green)'"
            >спасённых жизней</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step8" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Встреча в Дебальцево: '"
        :subtitle="'Доноры Донбасса объединяются'"
        :date="'13.02.2026'"
        :status="'Завершена'"
      >
        <p>
          Доноры Донбасса объединяются: взаимодействие донорских сообществ
          Горловки и Дебальцево!
        </p>
        <p>
          Куратор донорского движения «Пульс добра»
          <UiStrong>диакон Роман Шуклин</UiStrong>
          рассказал слушателям о правильной подготовке к Великому посту и о том,
          как провести время масленицы с пользой, познакомил с информационным
          стендом, а также раздал просветительские буклеты.
        </p>
        <p>Мероприятие посетило <UiStrong>более 60 человек.</UiStrong></p>
        <p>
          Участники обменялись опытом проведения
          <UiStrong>донорских акций</UiStrong> и договорились о дальнейших
          встречах.
        </p>
        <ProjectsPhotos :photos="photos.step7" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 6: '"
        :subtitle="'Международная предновогодняя акция'"
        :date="'27.12.2025'"
        :status="'Завершена'"
      >
        <p>
          Международная акция по сдаче донорской крови прошла в Горловке в
          преддверии <UiStrong> Нового года</UiStrong>. Проект социального
          отдела Горловской епархии «Пульс добра» поддержали
          <UiStrong
            >добровольцы из Москвы, Смоленска, Екатеринбурга,
            Севастополя,</UiStrong
          >
          а также абхазских <UiStrong> Сухума и Гудауты</UiStrong>.
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="9"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="4.2"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step6" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 5: '"
        :subtitle="'День памяти святителя Николая Чудотворца'"
        :date="'15.12.2025 – 20.12.2025'"
        :status="'Завершена'"
      >
        <p>Акция приуроченная ко дню памяти святителя Николая Чудотворца.</p>
        <p>
          В этот раз к акции «Пульс добра» присоединились
          <UiStrong
            >священнослужители и прихожане из Енакиева и Шахтёрска.</UiStrong
          >
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="34"
            :color="'var(--color-blue)'"
            >человека</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'first'"
            :number="7"
            :color="'var(--color-pink)'"
            >первичных доноров</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="16"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'heart-pulse'"
            :number="102"
            :color="'var(--color-green)'"
            >спасённые жизни</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step5" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 4: '"
        :subtitle="'«Покров» неделя донорской крови'"
        :date="'13.10.2025 – 18.10.2025'"
        :status="'Завершена'"
      >
        <p>
          Акция в рамках Недели донорской крови, приуроченной
          <UiStrong>к празднику Покрова Пресвятой Богородицы</UiStrong>. В акции
          проекта «Пульс добра» принял участие директор АНО "ДоброГорловка".
        </p>
        <p>
          Также к нашей акции
          <UiStrong>из побуждения помочь больным и раненым</UiStrong> в
          прифронтовом городе присоединяются и добровольцы из других регионов.
        </p>
        <p>
          <UiStrong>Спасибо им за это!</UiStrong>
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="13"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'first'"
            :number="1"
            :color="'var(--color-pink)'"
            >первичный донор</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="6.1"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'heart-pulse'"
            :number="39"
            :color="'var(--color-green)'"
            >спасённых жизней</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step4" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 3: '"
        :subtitle="'Неделя донорской крови для детей'"
        :date="'11.08.2025 — 16.08.2025'"
        :status="'Завершена'"
      >
        <p>
          Донорская акция прошла в рамках Недели донорства для детей, страдающих
          гемофилией и другими заболеваниями крови, и была приурочена ко дню
          памяти святого царевича Алексия.
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="18"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'first'"
            :number="1"
            :color="'var(--color-pink)'"
            >первичный донор</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="8"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'plasma'"
            :number="300"
            :ci="'мл.'"
            :color="'var(--color-orange)'"
            >плазмы</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step3" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 2'"
        :subtitle="''"
        :date="'26.06.2025'"
        :status="'Завершена'"
      >
        <p>
          Целенаправленная сдача крови горловчан для семьи, пострадавшей 23 июня
          от удара беспилотника.
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="6"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="2335"
            :ci="'мл.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'plasma'"
            :number="600"
            :ci="'мл.'"
            :color="'var(--color-orange)'"
            >плазмы</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step2" :photos-all="photosAll" />
      </ProjectsStep>
      <ProjectsStep
        :title="'Сдача 1: '"
        :subtitle="'День защиты детей 2025'"
        :date="'01.06.2025'"
        :status="'Завершена'"
      >
        <p>
          1 июня – наши активисты присоединись к донации, приуроченной ко дню
          защиты детей.
        </p>
        <p>
          Мы гордимся нашими отважными донорами, которые нашли время и проявили
          настоящее милосердие!
        </p>
        <ProjectsPoints>
          <ProjectsPoint
            :icon="'person'"
            :number="18"
            :color="'var(--color-blue)'"
            >человек</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'first'"
            :number="8"
            :color="'var(--color-pink)'"
            >первичных доноров</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'blood'"
            :number="8"
            :ci="'л.'"
            :color="'var(--color-red)'"
            >крови</ProjectsPoint
          >
          <ProjectsPoint
            :icon="'heart-pulse'"
            :number="54"
            :color="'var(--color-green)'"
            >спасённые жизни</ProjectsPoint
          >
        </ProjectsPoints>
        <ProjectsPhotos :photos="photos.step1" :photos-all="photosAll" />
      </ProjectsStep>
    </ProjectsSteps>
  </section>
</template>

<script setup lang="ts">
  import MenuClient from '~/components/projects/Menu.client.vue';
  import { PULSE as project } from '~/content/pulse.project';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Партнёры проекта', id: 'partners' },
    { name: 'Сдачи крови и новости проекта', id: 'steps' },
  ];

  const photos = project.photos;
  const photosAll = getAllPhoto(project.photos);
</script>

<style scoped lang="scss">
  .pulse-health {
    display: flex;
    flex-wrap: wrap;
    // gap: 0 1em;
    justify-content: center;
    align-items: center;
    &__pulse,
    &__health,
    &__equally,
    &__first {
      // width: 18%;
      flex: 1;
      aspect-ratio: 1/0.75;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3em;
      @media (width <= 768px) {
        font-size: 2em;
        // width: 15%;
      }
    }
    &__first {
      color: var(--color-blue);
    }
    &__pulse {
      color: var(--color-red);
    }
    &__equally {
      color: var(--color-orange);
    }
    &__health {
      color: var(--color-green);
    }
    &__info {
      width: 100% !important;
    }
    & span {
      font-size: 0.5em;
      // align-self: end;
    }
  }
</style>
