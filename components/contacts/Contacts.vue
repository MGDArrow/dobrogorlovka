<template>
	<section class="contacts" id="contacts">
		<div class="contacts__body">
			<h2>Реквизиты и Контакты</h2>
			<div class="contacts__flex">
				<div class="contacts__requisites">
					<h3>Реквизиты</h3>
					<div class="info-list">
						<p v-for="requisite in requisites" :key="requisite.label">
							<strong>{{ requisite.label }}:</strong>{{ requisite.var }}
						</p>
					</div>
				</div>
				<div class="contacts__contacts" @mouseover="isHover = true" >
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
					<DocumentsCard :icon="'vk'" :href="'https://vk.com/dobrogorlovkanko'">@dobrogorlovkanko</DocumentsCard>
					<DocumentsCard :icon="'tg'" :href="'https://vk.com/dobrogorlovkanko'">@dobrogorlovkanko</DocumentsCard>			
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

onMounted(() => {
	(document.body.clientWidth < 1600) && (translateY.value = '200%');
	(document.body.clientWidth < 1200) && (translateY.value = '280%');
	
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
		}
	}

	&__requisites {
		width: 50%;
		text-align: right;
		display: flex;
		align-items: center;
		justify-content: end;
		flex-wrap: wrap;

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
	}
}
</style>
