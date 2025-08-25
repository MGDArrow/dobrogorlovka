<template>
  <section class="partners" id="partners">
    <h2>{{ title }}</h2>
    <div class="partners__wrapper" ref="parentRef">
      <div class="partners__cards">
        <PartnersCard
          v-for="(partner, photo) in partners"
          :key="photo"
          :photoSrc="`/partners/${photo}.webp`"
          :parent="parentRef"
        >
          {{ partner }}
        </PartnersCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  interface Props {
    partners: {};
    title: string;
  }

  defineProps<Props>();

  const parentRef = useTemplateRef('parentRef');
</script>

<style scoped lang="scss">
  .partners {
    &__wrapper {
      width: 100%;
      @media screen and (max-width: 768px) {
        position: relative;
        width: calc(98vw - 40px);
        margin: 0 auto;
        overflow-y: auto;
      }
    }
    &__cards {
      width: 80%;
      align-items: center;
      height: max-content;
      margin: 20px auto;
      display: flex;
      gap: 20px;
      justify-content: space-evenly;
      flex-wrap: wrap;
      @media screen and (max-width: 1599px) {
        width: 100%;
      }
      @media screen and (max-width: 1199px) {
        gap: 5px;
      }
      @media screen and (max-width: 768px) {
        flex-wrap: nowrap;
        gap: 5px;
        width: max-content;
      }
    }
  }
</style>
