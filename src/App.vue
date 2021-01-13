<template>
  <div id="app">
    <Header />
    <section class="main-content">
      <router-view/>
    </section>
    <UpBtn />
  </div>
</template>


<script>
  import appStore from '../src/store/app'
  import chartStore from '../src/store/chartStore'
  import Header from '@/components/kernel/Header/Header'
  import UpBtn from '@/components/kernel/UpBtn.vue'
  import { mapGetters } from 'vuex'


  export default {
    components: { Header, UpBtn },

    computed: {
      ...mapGetters({
        socketStatus: 'sockets/getSocketStatus',
        socket: 'sockets/getSocketInstance'
      })
    },

    watch: {
      socketStatus (nv) {
        if (nv) {
          console.log('connected...')
        } else if (!nv) {
          console.log('disconnected')
        }
      }
    },

    beforeCreate () {
      if (!this.$store.state.app) {
        this.$store.registerModule('app', appStore)
      }
      if (!this.$store.state.chartStore) {
        this.$store.registerModule('chartStore', chartStore)
      }

      console.log(this.$store.state)
    },



    beforeDestroy () {
      if (this.socketStatus) {
        console.log('disconnected!')
        this.socket.close()
      }
      if (this.$store.state.app) {
        this.$store.unregisterModule('app')
      }
      if (this.$store.state.chartStore) {
        this.$store.unregisterModule('chartStore')
      }
      if (this.$store.state.sockets) {
        this.$store.unregisterModule('sockets')
      }
    },

  }

</script>

<style lang="scss">
  @import './assets/scss/global.scss';

  body {
    background: #1F2833;
  }

  .main-content {
    padding: 75px 10px;
  }

  @media screen and (max-width: 600px) {
    .main-content {
      padding: 75px 0;
    }
  }

</style>
