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
	width: min(525px, 100%);
	margin: 0 auto;
	& p {
	  margin: 20px auto 10px;
	}
  
	& strong {
	  font-weight: 600;
	  display: block;
	  text-transform: uppercase;
	}
  
	& span {
	  display: block;
	//   width: 60%;
	  font-size: 0.8em;
	  font-style: italic;
	}

}
</style>
