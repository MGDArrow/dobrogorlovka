<template>
  <section class="team" id="team">
    <h2>Наша команда</h2>
    <div class="team__big-cards">
      <TeamCard 
        v-for="persona in bigCards" :key="persona.id" 
        :photoSrc="`persons/${persona.photo}.webp`" 
        @click="popup = persona"
      >
        <TeamName>
          <p><strong>{{ persona.surname }}</strong> {{ persona.name }}</p>
          <span>{{ persona.post }}</span>
        </TeamName>
      </TeamCard>
    </div>
    <div class="team__small-cards">
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


const bigCards = ENV.team.filter((persona) => persona.type === 'big');
const smallCards = ENV.team.filter((persona) => persona.type === 'small');

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
  }
}
</style>
