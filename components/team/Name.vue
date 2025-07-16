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
	  font-weight: 600;
	  display: block;
	  text-transform: uppercase;
	}
  
	& span {
	  display: block;
	  font-size: 0.8em;
	  font-style: italic;
	}

}
</style>
