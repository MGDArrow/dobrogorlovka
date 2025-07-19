<template>
  <section class="team" id="team">
    <h2>Наша команда</h2>
    <div class="team__big-cards">
      <TeamCard 
        v-for="persona in bigCards" :key="persona.id" 
        :photoSrc="`persons/${persona.photo}.webp`"
        :class="{unactive: persona.type === 'small'}"
        @click="popup = persona"
      >
        <TeamName>
          <p><strong>{{ persona.surname }}</strong> {{ persona.name }}</p>
          <span>{{ persona.post }}</span>
        </TeamName>
      </TeamCard>
    </div>
    <div class="team__small-cards" v-if="smallCards.length">
      <TeamCardSmall 
        v-for="persona in smallCards" :key="persona.id" 
        :photoSrc="`persons/${persona.photo}.webp`"
        @click="popup = persona"
      >
        <TeamName>
          <p><strong>{{ persona.surname }}</strong> {{ persona.name }}</p>
          <span>{{ persona.post }}</span>
        </TeamName>
      </TeamCardSmall>
    </div>
    <TeamCardPopup v-if="popup !== null" :persona="popup" @closePopup="popup = null"/>
  </section>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';
import type { IPersona } from '~/types/types';


const bigCards = ENV.team;
const smallCards = ref(ENV.team.filter((persona) => persona.type === 'small'));

const popup: Ref<null | IPersona> = ref(null);

</script>

<style scoped lang="scss">
.team {

  &__big-cards {
    margin: 20px auto;
    display: flex;
    width: 80%;
    justify-content: space-between;
    @media screen and (max-width: 1599px) {
      width: 1100px;
      font-size: 1em;
	  }  
    @media screen and (max-width: 1199px) {
      width: 730px;
      font-size: 0.7em;
      justify-content: space-around;
    }
    @media screen and (max-width: 768px) {
      width: calc(98vw - 40px);
      flex-wrap: wrap;
      font-size: 1.2em;
      gap: 20px;
    }
    & .unactive{
      display: none;
      @media screen and (max-width: 768px) {
        display: flex;
      }
    }
  }
  
  &__small-cards {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
    @media screen and (max-width: 1599px) {
      width: 1100px;
    }
    @media screen and (max-width: 1199px) {
      width: 730px;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
}
</style>
