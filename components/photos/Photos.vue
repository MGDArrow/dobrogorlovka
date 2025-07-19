<template>
  <section class="photos" id="photos">
	<h2>Фотогаларея</h2>
	<div class="photos__wrap">
		<div class="photos__lines" @mouseover="isHover = true" >
			<UiBlocks :active="isHover" class="blocks-photo"/>
			<div class="photos__list">
				<div 
				v-for="(photo, index) in arrayNamePhotos" 
				:key="index" 
				:class="{active: activeIndex === index}" 
				@click="slideTo(index)">
					<img :src="`/photos/${photo}.webp`" :alt="photo" 
					@mouseover="hoverPhotos.add(index)" 
					:class="{colorise: hoverPhotos.has(index)}">
				</div>
			</div>
		</div>
		
		<div class="photos__view">
			<swiper
				:slidesPerView="1"
				:spaceBetween="30"
				:loop="true"
				:pagination="{
				dynamicBullets: true,
				}"
				:mousewheel="true"
				:keyboard="{
					enabled: true,
				}"
				:navigation="true"
				:centeredSlides="true"
				:virtual="true"
				:zoom="true"
				:autoplay="{
					delay: 10000,
					disableOnInteraction: false,
				}"
				:modules="modules"
				class="mySwiper"
				@swiper="setSwiperRef"
				@slideChange="(e) => slideChange(e.realIndex)"
			>
				<swiper-slide v-for="(photo, index) in arrayNamePhotos" :key="index" :virtualIndex="index">
					<img :src="`/photos/${photo}.webp`" :alt="photo" @mouseover="hoverPhotos.add(index)" :class="{colorise: hoverPhotos.has(index)}">
				</swiper-slide>
			</swiper>
		</div>
	</div>
	
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay, Zoom, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ENV } from '~/assets/env';

const isHover = ref(false);
const arrayNamePhotos = ENV.photoArray;
const modules = [Navigation, Pagination, Keyboard, Mousewheel, Autoplay, Zoom, Virtual ];
const activeIndex = ref(0)
const swiperRef:Ref<null | typeof Swiper> = ref(null);

const hoverPhotos = ref(new Set());

const slideChange = (realIndex: number) => {
	activeIndex.value = realIndex;
	hoverPhotos.value.add(realIndex);

}

const setSwiperRef = (swiper) => {
	swiperRef.value = swiper;
};
const slideTo = (index: number) => {
	swiperRef?.value?.slideTo(index + 1, 0);
};

</script>

<style scoped lang="scss">
.photos{
	&__wrap{
		width: 100vw;
		position: relative;
		left: calc((100vw - 1650px) / 2 * -1 - 150px);
		display: flex;
		gap: 50px;
		margin: 20px 0;
		user-select: none;
		@media screen and (max-width: 1599px) {
			left: calc((100vw - 1230px) / 2 * -1 - 90px);
			gap: 30px;
		}
		@media screen and (max-width: 1199px) {
			left: calc((100vw - 760px) / 2 * -1 - 40px);
			gap: 20px;
		}
		@media screen and (max-width: 768px) {
			width: calc(98vw - 40px);
			position: unset;
			margin: 40px auto;
		}
	}
	&__lines{
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: end;
		width: 50%;
		border-radius: var(--border-radius);
		border: 4px solid var(--color-black);
		transition: 0.5s ease-in-out;
		&:hover{
			transform: scale(1.04);
		}
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
	&__list{
		width: 430px;
		height: 580px;
		overflow-y: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		overflow-x: hidden;
		@media screen and (max-width: 1599px) {
			width: 330px;
			height: 430px;
		}
		@media screen and (max-width: 1199px) {
			width: 150px;
			height: 280px;
		}
		& div{
			width: 200px;
			height: 150px;
			border: 4px solid transparent;
			border-radius: var(--border-radius);
			overflow: hidden;
			display: flex;
			justify-content: center;
			&.active{
				border: 4px solid var(--color-black);
			}
			@media screen and (max-width: 1599px) {
				width: 150px;
				height: 112.5px;
			}
		}
		& img{
			max-width: 200px;
			max-height: 150px;
			cursor: pointer;
			@media screen and (max-width: 1599px) {
				max-width: 150px;
				max-height: 112.5px;
			}
		}
		&::-webkit-scrollbar {
			width: 4px;
			border-radius: var(--border-radius);
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
		&::-webkit-scrollbar-thumb {
			background-color: var(--color-black);
			opacity: 0;
		}

	}
	&__view{
		width: 808px;
		user-select: none;
		transition: 0.5s ease-in-out;
		@media screen and (max-width: 1599px) {
			width: 608px;
		}
		@media screen and (max-width: 1199px) {
			width: 408px;
		}
		@media screen and (max-width: 768px) {
			width: calc(98vw - 40px);
		}
		&:hover{
			transform: scale(1.04);
		}
		& img{
			display: block;
			max-width: 800px;
			height: 608px;
			justify-self: center;
			border: 4px solid var(--color-black);
			border-radius: var(--border-radius);
			margin: 0 auto;
			@media screen and (max-width: 1599px) {
				max-width: 600px;
				height: 458px;
			}
			@media screen and (max-width: 1199px) {
				max-width: 400px;
				height: 308px;
			}
			@media screen and (max-width: 768px) {
				max-width: calc(98vw - 40px);
				height: calc((98vw - 40px) * 0.75 - 6px);
			}
		}
	}
	& img {
		filter: grayscale(100%);
		transition: 0.5s ease-in-out;
		&.colorise{
			filter: grayscale(0%) ;
		}
	}
}
.blocks-photo{
	transform: rotateZ(-25deg) translateY(170%) translateX(10%);
	@media screen and (max-width: 1599px) {
		transform: rotateZ(-25deg) translateY(200%) translateX(10%);
	}
	@media screen and (max-width: 1199px) {
		transform: rotateZ(-25deg) translateY(280%) translateX(10%);
	}
}
</style>
