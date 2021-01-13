<template>
  <div class="home">
    <div class="home__tabs" :class="{'home__tabs-disable' : loading}">
      <div class="home__tabs-wrapper" :class="{ 'slide-left' : activeTab === 'historyChart', 'slide-right' : activeTab === 'currentRate' }">
        <p class="tabs-item" :class="{'tabs-item-active' : activeTab === 'historyChart'}" @click="activeTab = 'historyChart'">History Chart</p>
        <p class="tabs-item" :class="{'tabs-item-active' : activeTab === 'currentRate'}" @click="activeTab = 'currentRate'">Live Rate</p>
      </div>
    </div>
    <Chart class="home__chart" :chart-type="activeTab" @changeTab="handleChartChange"/>
    <div class="home__additional-wrapper">
      <CointsTable />
    </div>
  </div>
</template>

<script>
//import HelloWorld from '@/components/HelloWorld.vue'
import Chart from '@/components/CurrencyChart/CurrencyChart'
import CointsTable from '@/components/CoinsTable/CointsTable'
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'Home',
  components: {
    Chart,
    CointsTable
  },

  data () {
    return {
      activeTab: 'historyChart'
    }
  },

  computed: {
    ...mapGetters({
      loading: 'app/getLoading',
      tableDataLoading: 'app/getLoadingTableData',
      sockets: 'sockets/getSocketInstance'
    })
  },


  watch: {
    loading (nv) {
      console.log(nv)
    }
  },

  async created () {
    await this.$store.commit('app/SET_INITIAL')
    this.$store.commit('app/SET_LOADING', true)
    await this.innitBlockChainList()
    await this.getCryptoInfo({initial: true})
    await this.getChartData({value: 'BTC', displayValue: 'Bitcoin'})
    this.$store.commit('app/SET_LOADING', false)
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    console.log('socket', this.socketStatus, this.sockets)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    ...mapActions({
      innitBlockChainList: 'app/innitBlockChainList',
      getCryptoInfo: 'app/getCryptoInfo',
      getChartData: 'chartStore/getChartData',
    }),
    handleScroll () {
      let bottomOfWindow = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2
      if (bottomOfWindow) {
        if (!this.tableDataLoading) {
          this.getCryptoInfo({initial: false})
        }
      }
    },
    handleChartChange (tab) {
      this.activeTab = tab
    }
  }

}

</script>

<style lang="scss">
  .home {

    &__tabs {
      padding-top: 30px;
      @media all and (max-width: 600px) {
        padding-top: 45px;
      }
      display: flex;
      justify-content: center;
      &-disable {
        pointer-events: none;
      }
      &-wrapper {
        display: flex;
        position: relative;
        width: 400px;
        &.slide-left:after {
          left: 0;
          transition: left 0.2s linear;
        }
        &.slide-right:after {
          left: 50%;
          transition: left 0.2s linear;
        }
        &:after {
          content: '';
          display: block;
          width: 50%;
          height: 1px;
          background: #47aea6;
          bottom: 0;
          position: absolute;
          left: 0;
        }
      }
      .tabs-item {
        width: 50%;
        text-align: center;
        cursor: pointer;
        padding: 20px 0;
        user-select: none;
        margin-bottom: 0;
        background: rgba(0, 0, 0, 0.1);
        color: #47aea6;
        font-weight: bold;
        &-active {
          background: rgba(0, 0, 0, 0.2);
        }
      }
    }

    .tabs-item {
      width: 50%;
      text-align: center;
      cursor: pointer;
      padding: 20px 0;
      user-select: none;
      margin-bottom: 0;
      background: rgba(0, 0, 0, 0.1);
      &-active {
        background: rgba(0, 0, 0, 0.2);
      }
    }

    &__chart {
      margin-top: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &__additional {

      &-wrapper {
        margin-top: 50px;
      }
    }
  }
</style>
