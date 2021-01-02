<template>
<section class="loading-circle">
  <svg
      :height="`${size}px`"
      :width="`${size}px`"
  >
    <circle :cx="size/2" :cy="size/2" :r="size/2 - 5"></circle>
  </svg>
</section>
</template>

<script>
export default {
  name: "loadingCicle",

  props: {
    size: {
      type: Number,
      default: 80
    }
  }
}
</script>

<style lang="scss">
.loading-circle {
  svg {
    animation: rotate 1.3s linear infinite;

    circle {
      width: 100%;
      height: 100%;
      fill: none;
      stroke-width: 10;
      stroke: #47aea6;
      stroke-linecap: round;
      stroke-dasharray: 110;
      stroke-dashoffset: 110;
    }
  }

}


@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>