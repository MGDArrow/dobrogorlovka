<template>
	<section class="contacts" id="contacts" ref="activeRef">
		<div class="contacts__body">
			<h2 >Реквизиты и Контакты</h2>
			<div class="contacts__flex">
				<div class="contacts__requisites">
					<h3>Реквизиты</h3>
					<div class="info-list">
						<p v-for="requisite in requisites" :key="requisite.label">
							<strong>{{ requisite.label }}:</strong>{{ requisite.var }}
						</p>
					</div>
				</div>
				<div class="contacts__contacts" @mouseover="isHover = true"  >
					<UiBlocks :active="isHover" :rotate-z="'30deg'" :translate-x="'-20%'" :translate-y="translateY"/>
					<h3>Контакты</h3>
					<div class="info-list">
						<p><strong>Телефон:</strong>{{ phone }}</p>
						<p><strong>E-mail:</strong>{{ email }}</p>
						<p><strong>Юридический адрес:</strong>{{ address }}</p>
					</div>
				</div>
			</div>
			<div class="contacts__messangers">
					<DocumentsCard :icon="'vk'" :key="'vk'" :href="'https://vk.com/dobrogorlovkanko'">@dobrogorlovkanko</DocumentsCard>
					<DocumentsCard :icon="'tg'" :key="'tg'" :href="'https://vk.com/dobrogorlovkanko'">@dobrogorlovkanko</DocumentsCard>			
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';

const isHover = ref(false);

const requisites = ENV.requisites;
const phone = ENV.phone;
const email = ENV.email;
const address = ENV.address;

const translateY = ref('162%');

const activeRef = useTemplateRef('activeRef');

onMounted(() => {
	(document.body.clientWidth < 1600) && (translateY.value = '200%');
	(document.body.clientWidth < 1200) && (translateY.value = '280%');
	(document.body.clientWidth <= 768) && (translateY.value = '230%');	
	document.addEventListener('scroll', () => scrollActivation(activeRef.value, isHover))
})

onUnmounted(() => {
	document.removeEventListener('scroll', () => scrollActivation(activeRef.value, isHover))
})
</script>

<style scoped lang="scss">
.contacts {
	width: 100vw;
	overflow-x: hidden;
	
	
	&__body{
		width: 110vw;
		position: relative;
		left: -5vw;
	}
	&__flex {
		display: flex;
		& h3{
			width: 100%;
		}
		& > div{
			transition: 0.4s ease-in-out;
			padding: 20px 100px;
			&:hover{
				transform: scale(1.06);
			}
			@media screen and (max-width: 1599px) {
				padding: 20px 50px;
			}
			@media screen and (max-width: 768px) {
				padding: 20px max(40px, 10vw);
			}
		}

		@media screen and (max-width: 768px) {
			flex-direction: column-reverse;
			& h3{
				width: 90vw;
				margin: 0;
			}
		}
	}

	&__requisites {
		width: 50%;
		text-align: right;
		display: flex;
		align-items: center;
		justify-content: end;
		flex-wrap: wrap;
		@media screen and (max-width: 768px) {
			width: 80vw;
			margin: 0 auto;
		}
	}

	&__contacts {
		position: relative;
		overflow: hidden;
		width: 50%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		border-radius: var(--border-radius);
		border: 4px solid black;
		@media screen and (max-width: 768px) {
			width: 100%;
			position: relative;
		}
	}
	&__messangers{
		width: 1000px;
		margin: 20px auto;
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		@media screen and (max-width: 1199px) {
			width: 750px;
			gap: 10px;
		}
		@media screen and (max-width: 768px) {
			width: calc(98vw - 40px);
			flex-direction: column;
			margin: 0 auto;
		}
	}
}
</style>
