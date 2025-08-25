<template>
  <div class="mainpage">
    <About />
    <Projects />
    <Team
      :title="'Наша команда'"
      :big-cards="bigCards"
      :small-cards="smallCards"
    />
    <Photos />
    <Partners :partners="partners" :title="'Наши партнёры'" />
    <Documents />
    <Contacts />
  </div>
</template>

<script setup lang="ts">
  import { ENV } from '~/assets/env';

  const bigCards = ENV.team;
  const smallCards = ENV.team.filter((persona) => persona.type === 'small');

  const partners = ENV.partners;
</script>

<style scoped lang="scss">
  .mainpage {
    width: 100%;
  }
</style>
