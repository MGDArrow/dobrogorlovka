<template>
  <footer  :class="{active: isHoverDirt}">
    <div class="footer__sun" @mouseover="isHoverSun = true" :class="{active: isHoverSun}"></div>
    <div class="footer__dirt" @mouseover="isHoverDirt = true" :class="{active: isHoverDirt}">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="/public/logo_bw.webp" alt="logo">
          <p>ДОБРОГОРЛОВКА</p>
        </div>
        <div class="footer__text">
          <p>2024 – {{ new Date().getFullYear() }}© АНО «Добогорловка»</p>
          <p>{{ phone }}</p>
          <p>{{ email }}</p>
          <p>{{ address }}</p>
        </div>
        <div>
          <a :href="created"  target="_blank" rel="noopener noreferrer" class="created">Created by <strong>MGDArrow</strong></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ENV } from '~/assets/env';

const isHoverSun = ref(false);
const isHoverDirt = ref(false);


const phone = ENV.phone;
const email = ENV.email;
const address = ENV.address;
const created = ENV.createdLink;
</script>

<style scoped lang="scss">
footer{
  width: 100vw;
  overflow-x: hidden;
  height: 600px;
  position: relative;
  color: var(--color-black);
  &.active{
    color: var(--color-white);
  }
  @media screen and (max-width: 1199px) {
    height: 600px;
  }
}
.footer{
  &__sun{
    position: absolute;
    left: 70%;
    top: 10px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: var(--color-white);
    transform: skew(-2deg);
    transition: 0.5s ease-in-out;
    border: 4px solid var(--color-black);
    &.active{
      background: yellow;
    }
  }
  &__dirt{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    border-top: 8px solid var(--color-black);
    background: var(--color-white);
    transition: 0.5s ease-in-out;
    &.active{
      background: var(--color-green);
    }
    @media screen and (max-width: 1199px) {
      font-size: 0.8em;
      height: 140px;
    }
    @media screen and (max-width: 768px) {
      font-size: 1em;
      height: max-content;
    }
  }
  &__content{
    width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    text-align: center;
    @media screen and (max-width: 1599px) {
      width: 1150px;
    }
    @media screen and (max-width: 1199px) {
      width: 769px;
    }
    @media screen and (max-width: 768px) {
      margin: 20px auto;
      width: 95vw;
      flex-direction: column;
      gap: 20px;
    }
  }
  &__logo {
    width: max-content;
    font-weight: 600;
    font-size: 1.3em;
    & img{
      height: 80px;
    }
    @media screen and (max-width: 1199px) {
      & img{
        height: 50px;
      }
    }
  }
  &__text{
    max-width: 50%;
    & p {
      margin: 0.3em 0;
    }
    @media screen and (max-width: 768px) {
      max-width: 80%;
    }
  }
}

.created{
  display: block;
  color: var(--color-black);
  text-decoration: none;
  padding: 10px;
  border-radius: var(--border-radius);
  border: 3px solid var(--color-black);
  cursor: pointer;
  & strong{
    display: block;
    font-weight: 600;
  }
  transition: 0.5s ease-in-out;
  &:hover{
    transform: scale(1.07);
  }
}
</style>
