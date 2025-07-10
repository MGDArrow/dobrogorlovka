<template>
  <header>
	<div class="header__logo"  @mouseover="isHover = true">
		<img :class="{active: !isHover}" src="/public/logo_bw.webp" alt="logo">
		<img :class="{active: isHover}" src="/public/logo_color.webp" alt="logo">
	</div>
	<h1 :class="{active: isHover}">
		<span>Д</span>
		<span>О</span>
		<span>Б</span>
		<span>Р</span>
		<span>О</span>
		<span>Г</span>
		<span>О</span>
		<span>Р</span>
		<span>Л</span>
		<span>О</span>
		<span>В</span>
		<span>К</span>
		<span>А</span>
	</h1>
	<nav>
		<div>Команда</div>
		<div>Партнёры</div>
		<div>Документы</div>
		<div>Контакты</div>
	</nav>
	
  </header>
</template>

<script setup lang="ts">
const isHover = ref(false)
</script>

<style scoped lang="scss">
header{
	padding: 20px 0;
	border-bottom: 4px solid var(--color-black);
}
.header__logo{
	width: 600px;
	height: 150px;
	margin: 30px auto;
	position: relative;
	& img{
		position: absolute;
		cursor: pointer;
		width: 100%;
		opacity: 0;
		transition: 0.4s ease-in-out;
		&.active{
			opacity: 1;
		}
	}
}
h1 {
	--border: 3px;
	--border-m: -3px;
	& span{
		transition: 0.4s ease-in-out;
	}
	&.active span{
		text-shadow: var(--border-m) var(--border-m) 0 var(--color-black), var(--border) var(--border-m) 0 var(--color-black), var(--border-m) var(--border) 0 var(--color-black), var(--border) var(--border) 0 var(--color-black);
			&:nth-child(1n){
				color: var(--color-green);
			}
			&:nth-child(2n){
				color: var(--color-blue);
			}
			&:nth-child(3n){
				color: var(--color-orange);
			}
			&:nth-child(4n){
				color: var(--color-pink);
			}
	}
}
nav{
	width: 1600px;
	margin: 0 auto;
	justify-content: space-evenly;
	display: flex;
	font-weight: 800;
	font-size: 1.3em;
	text-transform: uppercase;
	& div {
		text-align: center;
		cursor: pointer;
		transition: 0.4s ease-in-out;
		&:hover{
			transform: scale(1.03);
			&:nth-child(1n){
				color: var(--color-green);
			}
			&:nth-child(2n){
				color: var(--color-blue);
			}
			&:nth-child(3n){
				color: var(--color-orange);
			}
			&:nth-child(4n){
				color: var(--color-pink);
			}
		}
	}
}
</style>
