<template>
  <header class="header">
    <h2 class="header__title">Crypto compare</h2>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style lang="scss">
  .header {
    background: #1b1c1e;
    color: #66FCF1;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 400;

    &__title {
      font-size: 25px;
      font-weight: bold;
      user-select: none;
      cursor: pointer;
      letter-spacing: 2px;
    }
  }

</style>
