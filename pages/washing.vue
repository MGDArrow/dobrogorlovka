<template>
  <section id="block">
    <ClientOnly>
      <MenuClient :menu />
    </ClientOnly>
    <div class="project__updeck">
      <ProjectsImage :photo-src="project.photo" />
      <div class="project__info point" id="about">
        <ProjectsName>
          <h2>{{ project.name }}</h2>
          <span>{{ project.subname }}</span>
        </ProjectsName>
        <ProjectsDate>
          <strong>Реализация проекта:</strong><span>{{ project.date }}</span>
        </ProjectsDate>
        <ProjectsDescription>
          <p v-for="(descript, index) in project.description" :key="index">
            {{ descript }}
          </p>
        </ProjectsDescription>
      </div>
    </div>
    <Washing />
    <Partners
      :title="'Партнёры проекта'"
      :partners="project.partners"
      class="project-partners point"
      id="partners"
    />
    <ProjectsStep
      :title="'Закупка'"
      :subtitle="''"
      :date="'26.08.2025'"
      :status="'Завершённый'"
      id="step1"
      class="point"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio commodi
        incidunt numquam corporis et ratione, minus quae, cupiditate
        repudiandae, neque alias tempora. Eos ea incidunt suscipit cum
        repudiandae ipsum voluptatibus non alias explicabo blanditiis nemo
        exercitationem nam labore a magnam, iure ipsam et delectus dolor
        voluptates est fugit. Sunt culpa maxime officia unde maiores veritatis
        deleniti aperiam, tempora voluptatibus quibusdam. Dolorum explicabo
        harum delectus ullam fugit quis expedita, nam velit eum doloribus
        tempore itaque molestias optio perspiciatis accusantium odit provident.
        Laborum recusandae tenetur fugiat sunt nesciunt commodi amet omnis
        itaque illo dolor ullam beatae quidem, est numquam, ratione, eos
        adipisci!
      </p>
    </ProjectsStep>
  </section>
</template>

<script setup lang="ts">
  import MenuClient from '~/components/projects/Menu.client.vue';
  import { WASHING as project } from '~/content/washing.project';

  const menu = [
    { name: 'О проекте', id: 'about' },
    { name: 'Партнёры проекта', id: 'partners' },
  ];
</script>

<style scoped lang="scss"></style>
