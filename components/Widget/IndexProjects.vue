<template>
  <section id="projects">
    <h2>Наши проекты</h2>
    <ModuleProjectsWrapper>
      <ModuleProjectsItem
        :photoSrc="`projects/screen.webp`"
        :status="'Предподготовка'"
        @click="setRoute('screen')"
      >
        <template v-slot:title> Экран Добра </template>
        <template v-slot:description>
          Проект системной информационно-психологической поддержки населения
          через 7 уличных телеэкранов на остановочных комплексах в
          муниципалитетах ДНР.
        </template>
      </ModuleProjectsItem>
      <ModuleProjectsItem
        :photoSrc="`projects/washing.webp`"
        :status="'Постоянный'"
        @click="setRoute('washing')"
      >
        <template v-slot:title> Стирка Добра </template>
        <template v-slot:description>
          Бесплатная прачечная на 8 стиральных машинок для обеспечения
          потребностей в стирке вещей жителей города в связи с нестабильной
          ситуацией с водоснабжением.
        </template>
      </ModuleProjectsItem>
      <ModuleProjectsItem
        :photoSrc="`projects/pulse.webp`"
        :status="'Постоянный'"
        @click="setRoute('pulse')"
      >
        <template v-slot:title> Пульс Добра </template>
        <template v-slot:description>
          Проект систематических акций по сдаче донорской крови и её
          компонентов, которые призваны повысить количество потенциальных
          доноров среди молодёжи.
        </template>
      </ModuleProjectsItem>
      <ModuleProjectsItem
        :photoSrc="`projects/rill.webp`"
        :status="'На паузе'"
        @click="setRoute('rill')"
      >
        <template v-slot:title> Родник Добра </template>
        <template v-slot:description>
          Проект по помощи городу в обеспечении водой населения ввиду трудной
          ситуации с водоснабжением.
        </template>
      </ModuleProjectsItem>
      <ModuleProjectsItem
        :photoSrc="`projects/digital.webp`"
        :status="'Завершённый'"
        @click="setRoute('digital')"
      >
        <template v-slot:title> Цифровой иммунитет </template>
        <template v-slot:subtitle> Учись, Играй, Будь в безопасности </template>
        <template v-slot:description>
          Проект по обучению детей из многодетных семей навыкам пользования
          офисных программ, основам кибербезопасности, противостояния
          кибербуллингу и закладывание в подростков идей о морали в интернете.
        </template>
      </ModuleProjectsItem>
    </ModuleProjectsWrapper>
    <ModuleProjectsWrapper> </ModuleProjectsWrapper>
  </section>
</template>

<script setup lang="ts">
  function setRoute(route: string) {
    setLoading();
    setTimeout(() => useRouter().push(route), 1000);
  }
</script>
