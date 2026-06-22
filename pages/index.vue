<template>
  <div class="mainpage">
    <About />
    <WidgetIndexProjects />
    <Team
      :title="'Наша команда'"
      :big-cards="bigCards"
      :small-cards="smallCards"
    />
    <Photos />
    <WidgetIndexPartners />
    <Awards />
    <Documents>
      <h2>Документы организации</h2>
      <h3>Учредительные документы</h3>
      <div class="documents__cards">
        <DocumentsCard
          v-for="doc in docs"
          :key="doc.name"
          :size="doc.size"
          :href="`/docs/${doc.link}.pdf`"
          download
        >
          {{ doc.name }}
        </DocumentsCard>
      </div>
      <!-- <h3>Отчёты</h3>
      <div class="documents__cards">
        <DocumentsCard
          v-for="report in reports"
          :key="report.name"
          :size="report.size"
          :href="`/docs/${report.link}.pdf`"
          download
        >
          {{ report.name }}
        </DocumentsCard>
      </div> -->
    </Documents>
    <Contacts />
  </div>
</template>

<script setup lang="ts">
  import { ENV } from '~/assets/env';

  const docs = ENV.docs;
  // const reports = ENV.reports;

  const bigCards = ENV.team;
  const smallCards = ENV.team.filter((persona) => persona.type === 'small');
</script>

<style scoped lang="scss">
  .mainpage {
    width: 100%;
  }
</style>
