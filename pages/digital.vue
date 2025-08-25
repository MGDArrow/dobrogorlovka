<template>
  <section class="digital">
    <div class="project__updeck">
      <ProjectsImage :photo-src="'digital'" />
      <div class="project__info">
        <ProjectsName>
          <h2>Цифровой иммунитет</h2>
          <span>Учись, Играй, Будь в безопасности</span>
        </ProjectsName>
        <ProjectsDate>
          <strong>Реализация проекта:</strong>
          <span>18 августа 2025 – 28 февраля 2026</span>
        </ProjectsDate>
        <!-- <img src="/public/partners/pgrants_horizontal.png" alt="При под" /> -->
        <ProjectsDescription>
          <p>
            Наша заявка стала победителем второго конкурса Фонда Президентских
            грантов 2025 и этот проект стал первой грантовой историей в нашей
            организации.
          </p>
          <p>
            Проект направлен на обучение детей из многодетных семей, обучающихся
            в 8-11 классах общеобразовательных школ города Горловки навыкам
            пользования офисных программ Microsoft Office (Word, Excel,
            PowerPoint), а также основам кибербезопасности и противостояния
            кибербуллингу, закладывание в подростков идей о морали в интернете,
            а также обучение азам гимнастики для поддержания физической формы и
            избежания болезней при длительной работе за компьютером.
          </p>
        </ProjectsDescription>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

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
