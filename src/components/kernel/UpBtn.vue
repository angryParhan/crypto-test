<template>
  <section class="up-btn" v-show="allowBtn" @click="scrollTop">
    <img src="../../assets/icons/up-arrow.svg" alt="up">
  </section>
</template>

<script>
  export default {
    name: "upButton",
    data () {
      return {
        intervalInstance: undefined,
        allowBtn: false
      }
    },
    computed: {
      showBtn() {
        return this.allowBtn || this.value
      }
    },
    mounted() {
      this.allowBtn = window.innerHeight * 3 < window.scrollY;
      this.intervalInstance = setInterval(()=>{
        this.allowBtn = window.innerHeight * 3 < window.scrollY;
      },250)
    },
    destroyed() {
      clearInterval(this.intervalInstance);
    },
    methods: {
      scrollTop () {
        window.scroll({top: 0, behavior: 'smooth'})
      }
    }
  }
</script>

<style lang="scss">
  .up-btn {
    width: 50px;
    height: 50px;
    background: rgba(#484848, 0.6);
    border-radius: 50%;
    position: fixed;
    bottom: 50px;
    right: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    z-index: 30;

    img {
      height: 25px;
    }
  }
</style>
