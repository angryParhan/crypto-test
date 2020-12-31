<template>
  <div class="home">
    <Chart class="home__chart"/>
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

  computed: {
    ...mapGetters({
      loading: 'app/getLoading',
      tableDataLoading: 'app/getLoadingTableData'
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
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    ...mapActions({
      innitBlockChainList: 'app/innitBlockChainList',
      getCryptoInfo: 'app/getCryptoInfo',
      getChartData: 'chartStore/getChartData'
    }),
    handleScroll () {
      let bottomOfWindow = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2
      if (bottomOfWindow) {
        if (!this.tableDataLoading) {
          this.getCryptoInfo({initial: false})
        }
      }
    },
  }


}
</script>

<style lang="scss">
  .home {

    &__chart {
      margin-top: 20px;
    }

    &__additional {

      &-wrapper {
        margin-top: 50px;
      }
    }
  }
</style>
