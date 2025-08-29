<template>
  <section class="project-step">
    <div class="project-step__head">
      <h2>
        {{ title }}<span>{{ subtitle }}</span>
      </h2>
      <div class="project-step__date">{{ date }}</div>
    </div>

    <div class="project-step__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
  defineSlots<{
    default: string;
  }>();
  interface Props {
    title: string;
    subtitle: string;
    date: string;
  }

  defineProps<Props>();
</script>

<style lang="scss">
  .project-step {
    border: 4px solid var(--color-black);
    border-radius: var(--border-radius);
    &__head {
      display: flex;
      margin: 20px;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      & h2 {
        width: max-content;
        margin: 0;
        font-size: 1.9em;
        border: 4px solid var(--color-black);
        transition: 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
        & span {
          font-weight: 400;
        }
      }
      & div {
        font-size: 1.2em;
        height: max-content;
        padding: 3px 5px;
        border: 3px solid var(--color-black);
        transition: 0.3s ease-in-out;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
    &__body {
      margin: 20px;
      & p,
      & li {
        margin: 8px 0;
        text-align: justify;
        text-indent: 5%;
        line-height: 1.3em;
        // & strong {
        //   font-weight: 600;
        //   color: v-bind(getRandomColor());
        // }
      }

      & li {
        margin: 0 0 0 5%;
        &::before {
          display: inline-block;
          margin-right: 2%;
          content: ' ';
          min-width: 0.6em;
          width: 0.6em;
          height: 0.6em;
          border-radius: 2px;
          border: 2px solid var(--color-black);
        }
        &:nth-child(4n + 1)::before {
          background: var(--color-orange);
        }
        &:nth-child(4n + 2)::before {
          background: var(--color-green);
        }
        &:nth-child(4n + 3)::before {
          background: var(--color-blue);
        }
        &:nth-child(4n + 4)::before {
          background: var(--color-pink);
        }
      }
    }
    @media screen and (max-width: 1599px) {
      font-size: 0.9em;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.8em;
    }
  }
</style>
