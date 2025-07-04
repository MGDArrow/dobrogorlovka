<template>
  <div class="temp">
    <p>{{ test }}</p>
    <button type="button" @click="test++">+</button>
    <button type="button" @click="test--">-</button>
  </div>
</template>

<script setup lang="ts">
  const test = ref(0);
</script>
