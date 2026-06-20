<template>
  <section id="partners">
    <h2>Партнёры проекта</h2>
    <ModulePartnersWrapper>
      <ModulePartnersItem :photoSrc="`/partners/bfStrana.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/vesti.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/kochegarka.webp`">
        Газета "Кочегарка ДНР"
      </ModulePartnersItem>
      <ModulePartnersItem :photoSrc="`/partners/gorlovkaAdmin.webp`">
        Администрация г.о. Горловка
      </ModulePartnersItem>
      <ModulePartnersItem :photoSrc="`/partners/gorlovkaObr.webp`">
        Управление образования г.о. Горловка
      </ModulePartnersItem>
    </ModulePartnersWrapper>
  </section>
</template>
