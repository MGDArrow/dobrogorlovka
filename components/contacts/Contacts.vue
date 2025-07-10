<template>
	<section class="contacts">
		<h2>Реквизиты и Контакты</h2>
		<div class="contacts__flex">
			<div class="contacts__requisites">
				<h3>Реквизиты</h3>
				<div class="info-list">
					<p><strong>ОГРН:</strong>1249300015777</p>
					<p><strong>ИНН:</strong>9312010716</p>
					<p><strong>КПП:</strong>931201001</p>
				</div>
			</div>
			<div class="contacts__contacts" @mouseover="isHover = true" >
				<UiBlocks :active="isHover" :rotate-z="'30deg'" :translate-x="'-20%'" :translate-y="'162%'"/>
				<h3>Контакты</h3>
				<div class="info-list">
					<p><strong>Телефон:</strong>+7 (949) 520-81-55</p>
					<p><strong>E-mail:</strong>dobrogorlovka@yandex.ru</p>
					<p><strong>Юридический адрес:</strong>25688, ДНР, г. Горловка, ул. Соборная, д. 1</p>
				</div>
			</div>

		</div>
	</section>
</template>

<script setup lang="ts">
const isHover = ref(false)
</script>

<style scoped lang="scss">
.contacts {
	width: 100vw;
	position: relative;
	left: calc((100vw - 1650px) / 2 * -1);
	&__flex {
		display: flex;
		& h3{
			width: 100%;
		}
		& > div{
			transition: 0.4s ease-in-out;
			&:hover{
				transform: scale(1.06);
			}
		}
	}

	&__requisites {
		width: 50%;
		text-align: right;
		padding: 20px 100px;
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
		padding: 20px 100px;
		border-radius: var(--border-radius);
		border: 4px solid black;

	}
}
</style>
