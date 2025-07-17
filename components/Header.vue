<template>
  <header>
	<a class="header__logo" href="#" @mouseover="isHover = true">
		<img :class="{active: !isHover}" src="/public/logo_bw.webp" alt="logo">
		<img :class="{active: isHover}" src="/public/logo_color.webp" alt="logo">
	</a>
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
		<a href="/#about">О нас</a>
		<a href="/#projects">Проекты</a>
		<a href="/#team">Команда</a>
		<a href="/#photos">Фотогалерея</a>
		<a href="/#partners">Партнёры</a>
		<a href="/#docs">Документы</a>
		<a href="/#contacts">Контакты</a>
	</nav>
	
  </header>
</template>

<script setup lang="ts">
const isHover = ref(false)
</script>

<style scoped lang="scss">
header{
	width: 100vw;
	overflow-x: hidden;
	padding: 20px 0;
	border-bottom: 4px solid var(--color-black);
}
.header__logo{
	display: block;
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
	flex-wrap: wrap;
	font-weight: 800;
	font-size: 1.3em;
	text-transform: uppercase;
	& a {
		display: block;
		text-align: center;
		width: max-content;
		margin: 0 10px;
		cursor: pointer;
		transition: 0.4s ease-in-out;
		color: var(--color-black);
		text-decoration: none;
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
	@media screen and (max-width: 1599px) {
		width: 1200px;
		& a {
			margin: 10px 70px;
		}
	}
}
</style>
