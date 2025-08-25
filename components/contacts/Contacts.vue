<template>
	<section class="contacts" id="contacts" ref="activeRef">
		<div class="contacts__body">
			<h2 >Реквизиты и Контакты</h2>
			<div class="contacts__flex">
				<div class="contacts__requisites">
					<h3>Реквизиты</h3>
					<div class="info-list">
						<a v-for="(requisite, label) in requisites" :key="label" @click="copyText(label, requisite)">
							<strong>{{ label }}:</strong>{{ requisite }}
						</a>
					</div>
				</div>
				<div class="contacts__contacts" @mouseover="isHover = true"  >
					<UiBlocks :active="isHover" class="block-contacts"/>
					<h3>Контакты</h3>
					<div class="info-list">
						<a v-for="(contact, label) in contacts" :key="label" :href="getHrefContacts(label, contact)" :target="label === 'Юридический адрес' ? '_blank' : ''">
							<strong>{{ label }}:</strong>{{ contact }}
						</a>
					</div>
				</div>
			</div>
			<div class="contacts__messangers">
				<DocumentsCard 
					v-for="messanger in messangers" 
					:key="messanger.title"
				    :icon="messanger.photo" 
					:href="messanger.link"
				>
					{{ messanger.title }}
				</DocumentsCard>		
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ENV, getHrefContacts } from '~/assets/env';

const isHover = ref(false);

const requisites = ENV.requisites;
const contacts = ENV.contacts;
const messangers = ENV.messangers;

const activeRef = useTemplateRef('activeRef');

const copyText = (label: string, value: string) => {
	  navigator.clipboard.writeText(`${label}: ${value}`)
	  .then(() => alert(`${label} скопирован в буфер обмена`))
}

onMounted(() => {
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
		& a {
			flex: 1;
		}
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
.block-contacts{
	transform: rotateZ(30deg) translateY(162%) translateX(-20%);
	@media screen and (max-width: 1599px) {
		transform: rotateZ(30deg) translateY(200%) translateX(-20%);
	}
	@media screen and (max-width: 1199px) {
		transform: rotateZ(30deg) translateY(280%) translateX(-20%);
	}
	@media screen and (max-width: 768px) {
		transform: rotateZ(30deg) translateY(230%) translateX(-20%);
	}
}
</style>
