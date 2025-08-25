<template>
  <div class="wrapper">
    <Header/>
     <main>
       <NuxtPage/>
     </main>
      <ClientOnly>
        <UiLoading/>
      </ClientOnly>
    <Footer/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
</style>
