<template>
	<div class="popup" v-show="isVisible">
		<div class="popup__bg" @click="isVisible = false"></div>
		<div class="popup__body">
			<div class="popup__line-2"></div>
			<div class="popup__line"></div>
			
			<p class="popup__title">Рады привествовать у нас на сайте!</p>
			<p class="popup__purpose">Мы работаем для того, чтобы сделать лучше жизнь людей, которым требуется помощь и
				поддержка</p>
			<div class="popup__invite">
				<span>
					Присоединяйтесь к нашему движению:
				</span>
				<ul>
					<li>👉 <strong>Делись нашими постами</strong> — пусть о добрых делах узнает больше людей.</li>
					<li>👉 <strong>Стань волонтёром</strong> — иногда для важных перемен нужны просто ваши руки и доброе сердце.</li>
				</ul>
			</div>

			<div class="popup__button">
				<div class="popup__button-layer-1" @click="isVisible = false" :class="{active: isActive}">
					<div class="popup__button-layer-2" :class="{active: isActive}">
						<button type="button" @mouseover="isActive = true">Далее</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const isVisible = ref(false);
const isActive = ref(false);


function getTwoWeek(){
	const dateNow = new Date();
	const dateAdd = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() + 14).getTime();
	return dateAdd
}

onMounted(()=> {
	const local = window.localStorage.getItem('popup');
	if (!local){
		window.localStorage.setItem('popup', getTwoWeek().toString());
		isVisible.value = true;
	}
	else{
		if (new Date().getTime() > +local){
			window.localStorage.setItem('popup', getTwoWeek().toString());
			isVisible.value = true;
		}
	}
})
</script>

<style scoped lang="scss">
.popup {
	width: 100vw;
	height: 100dvh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;

	&__bg {
		width: 100%;
		height: 100%;
		background: var(--color-white);
		opacity: 0.7;
	}

	&__body {
		width: 800px;
		// height: 500px;
		padding: 20px 40px 20px 20px;
		border: 4px solid var(--color-black);
		border-radius: var(--border-radius);
		background: var(--color-white);
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		overflow: hidden;
	}

	&__line{
		position: relative;
		width: 872px;
		height: 35px;
		margin: 10px -40px 30px;
		border: 3px solid var(--color-black);
		border-radius: var(--border-radius);
		background-size: 200% 200%;
		background-position: 100% 0;
		background-image: linear-gradient(to right, var(--color-orange) 50%, var(--color-white) 50%);
		transition: 1.2s ease-in-out;
		animation: 3s test;
		animation-fill-mode: forwards;
	}
	&__line-2{
		position: absolute;
		top: -20px;
		right: 15px;
		width: 35px;
		height: 500px;
		border: 3px solid var(--color-black);
		border-radius: var(--border-radius);
		background-size: 200% 200%;
		background-position: 100% 100%;
		background-image: linear-gradient(to bottom, var(--color-pink) 50%, var(--color-white) 50%);
		transition: 1.2s ease-in-out;
		animation: 3s test;
		animation-fill-mode: forwards;
	}
	@keyframes test{
		to{
			background-position: 0 0;
		}
	}

	&__title {
		display: block;
		font-size: 1.5em;
		font-weight: 700;
		text-align: center;
		text-transform: uppercase;
	}

	&__purpose {
		display: block;
		text-align: center;
		margin: 20px 0;
	}

	&__invite {
		margin: 10px auto;
		width: 90%;
		font-size: 1.1em;
		& span {
			display: block;
			font-size: 1.1em;
			font-weight: 600;
		}
		& strong{
			font-weight: 500;
		}
		& li {
			margin: 5px 10px 0px;
			text-align: justify;
			transition: 0.2s ease-in-out;
			&:hover{
				transform: scale(1.03);
				&:nth-child(1n){
					color: var(--color-blue);
				}
				&:nth-child(2n){
					color: var(--color-orange);
				}
			}
		}
	}

	&__button {
		--height: 45px;
		--width: 250px;
		margin: 10px auto 0;
		display: flex;
		justify-content: center;
		align-items:  center;
		height: calc((var(--height) * 1.5 + 4px) * 1.5 + 4px);
		width: calc(var(--width) + var(--height) * 1.5 + 8px);
		&-layer-1{
			width: 0;
			height: 0;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid var(--color-black);
			border-radius: var(--border-radius);
			transition: 0.5s ease-in-out;
			&.active{
				height: calc((var(--height) * 1.5 + 4px) * 1.5 + 4px);
				width: calc(var(--width) + var(--height) * 1.5 + 8px);
				background: var(--color-blue);
			}
			&:hover{
				transform: scale(1.04);
			}
		}
		&-layer-2{
			width: 0;
			height: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 2px solid var(--color-black);
			border-radius: var(--border-radius);
			transition: 0.5s ease-in-out;
			&.active{
				height: calc(var(--height) * 1.5 + 4px);
				width: calc(var(--width) + var(--height) * 0.5 + 4px);
				background: var(--color-green);
			}
		}
		& button {
			text-transform: uppercase;
			font-size: 1.3em;
			cursor: pointer;
			padding: 0 40px;
			font-weight: 500;
			width: var(--width);
			height: var(--height);
			background: var(--color-white);
			border: 2px solid var(--color-black);
			border-radius: var(--border-radius);
		}
	}
}
</style>
