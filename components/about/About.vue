<template>
  <section class="about">
    <h2>О нас</h2>
    <!-- <div class="about__body">
      <div class="about__text">
        <div>Мы — социально ориентированная Автономная Некоммерческая Организация <strong>"ДоброГорловка"</strong>.</div>
        <div>Наша организация была создана <i>в сентябре 2024 года</i>.</div>
        <div><span>Наше внимание и работа направлены на:</span>
          <ul>
            <li>улучшение качества жизни социально незащищенных категорий граждан</li>
            <li>духовно-патриотическое воспитание молодежи</li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="about__body">
      <div class="about__name">
        <AboutCard>
          <p>Мы — социально ориентированная <br/> Автономная Некоммерческая Организация <br/>
          <strong>"ДоброГорловка"</strong>.</p>
        </AboutCard>
      </div>
      <div class="about__date">
        <AboutCard><p>Наша организация была создана <br/> <strong style="color: var(--color-blue)">в сентябре 2024 года</strong>.</p></AboutCard>
      </div>
      <div class="about__to">
        <AboutCard>
          <div>
            <strong style="color: var(--color-orange)">Наше внимание и работа направлены на:</strong>
          <ul>
            <li>улучшение качества жизни социально незащищенных категорий граждан</li>
            <li>духовно-патриотическое воспитание молодежи</li>
          </ul>
          </div>
        </AboutCard>
      </div>

    </div>

  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.about {
  &__body {
    width: 85%;
    margin: 0 auto;
    position: relative;
    height: 550px;
    text-align: justify;
    text-indent: 20px;

    & strong {
      font-weight: 700;
      color: var(--color-green);
      font-size: 1.2em;
    }

    & ul {
      list-style-type: square;
      list-style-position: inside;
    }
    & > div{
      position: absolute;
      display: flex; 
      justify-content: center;
      align-items: center;
    }
  }

  &__name {
    text-align: center;
    top: 0;
    left: 0;
    width: 800px;
    height: 330px;
  }
  
  &__date {
    top: 40px;
    text-align: center;
    right: 0;
    position: absolute;
    width: 700px;
    height: 300px;
  }
  &__to {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 350px;
  }
}
</style>
