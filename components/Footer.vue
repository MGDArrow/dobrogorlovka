<template>
  <footer >
    <div class="footer-logo">
      <img src="../assets/DobroGorlovka_black.svg" alt="logo">
    </div>
    <div class="footer-info">
      <a href="tel:+7(8442)600-410">+7 (8442) 600-410</a>
      400050, г. Волгоград, ул. Ткачева, 16А
      <a href="mail:bytchelovekom@mail.ru">bytchelovekom@mail.ru</a>
      
    </div>
    <div class="footer-copyright">
      2024 — 2025 © АНО «Доброгорловка»
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
footer{
  width: 100%;
  height: 30dvh;
  background: rgb(0, 90, 0);
  display: flex;
  color: white;
  text-align: center; 
  & > div {
    flex-grow: 1;
  }
  & img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(275deg) brightness(104%) contrast(101%);
    height: 10dvh;
    margin: 10dvh 0;
  }
  & > .footer-info {
    width: 60% ;
  }
}
</style>
