<template>
  <section class="team">
    <h2>Наша команда</h2>
    <div class="team__big-cards">
      <TeamCard :photoSrc="'persons/persona1.webp'">
        <TeamName>
          <p><strong>Поляков</strong> Иван Викторович</p>
          <span>Учредитель</span>
        </TeamName>
      </TeamCard>
      <TeamCard :photoSrc="'persons/persona1.webp'">
        <TeamName>
          <p><strong>Абросимов</strong> Дмитрий Викторович</p>
          <span>Учредитель</span>
        </TeamName>
      </TeamCard>
      <TeamCard :photoSrc="'persons/persona1.webp'">
        <TeamName>
          <p><strong>Ильчук</strong> Михаил Вадимович</p>
          <span>Учредитель</span>
        </TeamName>
      </TeamCard>
    </div>
    <div class="team__small-cards">
      <TeamCardSmall :photoSrc="'persons/persona1.webp'">
        <TeamName>
          <p><strong>Хоряков</strong> Станислав Владимирович</p>
          <span>Директор</span>
        </TeamName>
      </TeamCardSmall>
      <TeamCardSmall :photoSrc="'persons/persona1.webp'">
        <TeamName>
          <p><strong>Марковский</strong> Кирилл Николаевич</p>
          <span>Руководитель волонтёрского движения</span>
        </TeamName>
      </TeamCardSmall>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.team {
  min-height: 100dvh;
  width: 1600px;
  margin: 0 auto;

  &__big-cards {
    margin: 20px auto;
    display: flex;
    width: 80%;
    justify-content: space-between;
  }

  &__small-cards {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
  }
}
</style>
