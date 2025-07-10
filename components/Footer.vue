<template>
  <footer @mouseover="isHover = true"  :class="{active: isHover}">
    <div class="footer__sun" :class="{active: isHover}"></div>
    <div class="footer__dirt" :class="{active: isHover}">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="/public/logo_bw.webp" alt="logo">
          <p>ДОБРОГОРЛОВКА</p>
        </div>
        <div>
          <p>2024 – 2025© АНО «Добогорловка»</p>
          <p>+7 (949) 520-81-11</p>
          <p>dobrogorlovka@yandex.ru</p>
        </div>
        <div>
          <div class="created">Created by <strong>MGDArrow</strong></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const isHover = ref(false)
</script>

<style scoped lang="scss">
footer{
  width: 100%;
  height: 700px;
  position: relative;
  color: var(--color-black);
  &.active{
    color: var(--color-white);
  }
}
.footer{
  &__sun{
    position: absolute;
    left: 70%;
    top: 80px;
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
  }
  &__content{
    width: 1600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    text-align: center;
  }
  &__logo {
    width: max-content;
    font-weight: 600;
    font-size: 1.3em;
    & img{
      height: 80px;
    }
  }
}

.created{
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
