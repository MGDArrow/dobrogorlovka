<template>
  <div class="project-wait">
    <img :src="'/gear.gif'" alt="gear" />
    <div>ПО МЕРЕ РЕАЛИЗАЦИИ ШАГА ИНФОРМАЦИЯ БУДЕТ ДОБАВЛЯТЬСЯ</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .project-wait {
    width: 90%;
    margin: 0 auto;
    border: 4px solid var(--color-black);
    padding: 10px;
    border-radius: var(--border-radius);
    & img,
    & div {
      display: block;
      text-align: center;
      margin: 0 auto;
    }
    & div {
      font-size: 1.2em;
      font-weight: 500;
    }
  }
</style>
