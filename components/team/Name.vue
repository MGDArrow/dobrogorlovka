<template>
  <div class="team-name">
	<slot></slot>
  </div>
</template>

<script setup lang="ts">
defineSlots<{
  default: string;
}>();
</script>

<style lang="scss">
.team-name{
	& p {
	  margin: 20px auto;
	}
  
	& strong {
	  font-weight: 500;
	  display: block;
	}
  
	& span {
	  display: block;
	  font-size: 0.8em;
	  font-weight: 300;
	  font-style: italic;
	}

}
</style>
