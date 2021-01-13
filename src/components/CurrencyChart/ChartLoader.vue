<template>
  <section class="chart-loader" :class="{'chart-loader__animation-on': !disableAnimation}">
    <p v-if="disableAnimation" class="chart-loader__title">{{ errorText }}</p>
    <loading-circle v-else/>
  </section>

</template>

<script>
import loadingCircle from '@/components/kernel/loadingCicle'
  export default {
    name: "ChartLoader",
    components: {loadingCircle},
    props: {
      disableAnimation: {
        type: Boolean,
        default: false
      },
      errorText: {
        type: String,
        default: 'Sorry, live rate is unavailable for this coins'
      }
    },


  }
</script>

<style lang="scss">
  .chart-loader {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2e2e2f;

    &__animation-on {
      animation: blinker 1.5s linear infinite;
    }

    &__title {
      color: #47aea6;
      font-size: 20px;
      font-weight: bold;
    }
  }

  @keyframes blinker {
    50% {
      background: #49494a;
    }
  }

</style>
