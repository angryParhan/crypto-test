<template>
  <section class="coin-table">
    <div class="coin-table__header">
      <p>Name</p>
      <p>Last Price (USD)</p>
    </div>
    <div class="coin-table__body">
      <div
          v-for="(coin, i) in getCoins"
          class="coin-table__body-wrapper"
          :key="coin.CoinInfo.Name ? coin.CoinInfo.Name : i"
      >
        <template v-if="coin.CoinInfo.Name">
          <div class="coin-table__coin-name" @click="drawNewData(coin)">
            <img :src="`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`" :alt="`${coin.CoinInfo.FullName}-img`">
            <div class="coin-table__coin-name-wrapper">
              <span class="coin-table__coin-name-short">{{ coin.CoinInfo.Name }}</span>
              <span class="coin-table__coin-name-full">({{ coin.CoinInfo.FullName }})</span>
            </div>

          </div>

          <div class="coin-table__coin-value" @click="drawNewData(coin)">
            {{ coin.Price.USD }}
          </div>
        </template>

      </div>
    </div>

    <div class="coin-table__loader" v-if="tableDataLoading">
      <loadingCicle />
    </div>


  </section>
</template>

<script>
  import loadingCicle from "@/components/kernel/loadingCicle";
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: "CointsTable",
    components: { loadingCicle },


    computed: {
      ...mapGetters({
        getCoins: 'app/getCryptoTableData',
        tableDataLoading: 'app/getLoadingTableData'
      })
    },

    watch: {
      getCoins (nv) {
        console.log(nv)
      }
    },

    methods: {
      ...mapActions({
        getChartData: 'chartStore/getChartData'
      }),
      async drawNewData (coin) {
        console.log('start', coin)
        await this.getChartData({value: coin.CoinInfo.Name, displayValue: coin.CoinInfo.FullName})
        console.log('finish loading')
      }
    }
  }
</script>

<style lang="scss">
  $borderBaseColor: rgba(0,0,0,.8);

.coin-table {
  color: #66FCF1;
  width: 100%;
  box-shadow: inset 0 0 10px rgba(0,0,0,.5);

  &__header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background: rgba(0,0,0,.1);

    p {
      font-size: 25px;
      flex: 1;
      text-align: center;
      padding: 20px 0;
      user-select: none;
      border-bottom: 1px solid rgba(0,0,0,.3);

      &:first-of-type {
        border-right: 1px solid rgba(0,0,0,.3);
      }
    }

  }

  &__body {

    &-wrapper {
      display: flex;
      justify-content: space-around;

      & > div {
        flex: 1;
        height: 60px;
        border-bottom: 1px solid rgba(0,0,0,.3);
        cursor: pointer;

        &:hover {
          background: rgba(0,0,0,.2);
        }
      }
    }
  }

  &__loader {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__coin-name {
    border-right: 1px solid rgba(0,0,0,.3);
    text-align: center;
    display: flex;
    align-items: center;

    img {
      margin: 0 15px;
      object-fit: contain;
      height: 50px;
      width: 50px;
    }

    &-full {
      color: #47aea6;
      padding-left: 10px;
    }



  }

  &__coin-value {
    display: flex;
    justify-content: center;
    align-items: center;
  }

}


  @media screen and (max-width: 600px) {
    .coin-table {


      &__coin-name {
        &-wrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 95px;
          word-break: break-all;
        }
      }
    }
  }
</style>
