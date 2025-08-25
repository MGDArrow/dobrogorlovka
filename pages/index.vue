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
    <Partners />
    <Documents />
    <Contacts />
  </div>
</template>

<script setup lang="ts">
  import { ENV } from '~/assets/env';

  const bigCards = ENV.team;
  const smallCards = ref(
    ENV.team.filter((persona) => persona.type === 'small'),
  );
</script>

<style scoped lang="scss">
  .mainpage {
    width: 100%;
  }
</style>
