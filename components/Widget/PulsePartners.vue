<template>
  <section id="partners">
    <h2>Партнёры проекта</h2>
    <ModulePartnersWrapper>
      <ModulePartnersItem :photoSrc="`/partners/ossibge.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/spk-gorlovka.webp`">
        Станция переливания крови г. Горловки
      </ModulePartnersItem>
      <ModulePartnersItem :photoSrc="`/partners/spk-enakievo.webp`">
        Станция переливания крови г. Енакиево
      </ModulePartnersItem>
      <ModulePartnersItem :photoSrc="`/partners/don-donbass.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/wargonzo.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/kom-pravda.webp`" />
      <ModulePartnersItem :photoSrc="`/partners/oplottv.webp`">
        Телеканал "Оплот ТВ"
      </ModulePartnersItem>
      <ModulePartnersItem :photoSrc="`/partners/druzhina.webp`">
        Народная дружина
      </ModulePartnersItem>
    </ModulePartnersWrapper>
  </section>
</template>
