<template>
  <section class="photos">
	<h2>Фотогаларея</h2>
	<div class="photos__wrap">
		<div class="photos__lines" @mouseover="isHover = true" >
			<UiBlocks :active="isHover" :translateX="'10%'" :rotateZ="'-25deg'" :translateY="'170%'"/>
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
				@slideChange="(e) => activeIndex = e.realIndex"
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
		left: calc((100vw - 1650px) / 2 * -1 - 200px);
		display: flex;
		gap: 50px;
		margin: 20px 0;
		user-select: none;
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
	}
	&__list{
		// background: red;
		width: 430px;
		height: 580px;
		overflow-y: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding: 10px;
		overflow-x: hidden;
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
		}
		& img{
			max-width: 200px;
			max-height: 150px;
			cursor: pointer;
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
</style>
