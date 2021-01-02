<template>
  <section class="chart-loader">
    <loading-circle />
  </section>

</template>

<script>
import loadingCircle from '@/components/kernel/loadingCicle'
  export default {
    name: "ChartLoader",
    components: {loadingCircle},
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
    animation: blinker 1.5s linear infinite;
  }

  @keyframes blinker {
    50% {
      background: #49494a;
    }
  }

</style>
