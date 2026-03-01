<template>
  <Teleport to="body">
    <div class="alert">
      <div class="alert__close" @click="closeAlert()">x</div>
      <div class="alert__line"></div>
      <div class="alert__body">{{ modelValue }}</div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
  const modelValue = defineModel<string>({ required: true });

  onMounted(() => {
    setTimeout(() => {
      closeAlert();
    }, 2000);
  });

  function closeAlert() {
    modelValue.value = '';
  }
</script>

<style scoped lang="scss">
  .alert {
    width: 300px;
    height: 44px;
    z-index: 9999;
    position: fixed;
    background: var(--color-green);
    border: 3px solid var(--color-black);
    border-radius: var(--border-radius);
    top: 10px;
    // left: -310px;
    overflow: hidden;

    font-weight: 500;
    color: var(--color-white);
    animation: kf-alert 2s;
    &__close {
      position: absolute;
      right: 4px;
      top: -2px;
      cursor: pointer;
    }
    &__line {
      width: 100%;
      height: 5px;
      background: var(--color-white);
      animation: kf-line 2s linear forwards;
    }
    &__body {
      font-size: 1.1em;
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% - 5px);
    }
  }

  @keyframes kf-line {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
  @keyframes kf-alert {
    0% {
      left: -310px;
    }
    10% {
      left: 10px;
    }
    90% {
      left: 10px;
    }
    100% {
      left: -310px;
    }
  }
</style>
