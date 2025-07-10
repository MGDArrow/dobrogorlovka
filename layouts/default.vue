<template>
  <div class="wrapper">
    <Header/>
     <main>
       <NuxtPage/>
     </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.wrapper{
  width: 100%;
}
main {
  width: 1600px;
  margin: 0 auto;
}
</style>
