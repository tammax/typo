<template>
  <v-layout row align-space-around>
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-list three-line>
          <template v-for="(ranking, index) in rankings">
            <v-list-tile :key="index">
              <v-list-tile-action class="rank">
                <v-icon v-if="index === 0" large class="crown" color="#DBB400">
                  fa-crown
                </v-icon>
                <v-icon
                  v-else-if="index === 1"
                  large
                  class="crown"
                  color="#C9CACA"
                >
                  fa-crown
                </v-icon>
                <v-icon
                  v-else-if="index === 2"
                  large
                  class="crown"
                  color="#C47022"
                >
                  fa-crown
                </v-icon>
                <v-list-tile-action-text class="number">
                  {{ index + 1 }}
                </v-list-tile-action-text>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title class="score">
                  {{ ranking.score }}
                  <span>pt</span>
                </v-list-tile-title>
                <v-list-tile-sub-title class="chain-rate">
                  <div>
                    {{ ranking.maxChainCount }}
                    <span>chain</span>
                  </div>
                  <div>
                    {{ ranking.rate }}
                    <span>%</span>
                  </div>
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider v-if="index + 1 < rankings.length" :key="index + 100">
            </v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "TypoRankingBox",
  props: {
    rankings: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list__tile {
  .score {
    font-size: 28px;
    text-align: center;

    span {
      font-size: 15px;
      padding: 10px;
    }
  }

  .chain-rate {
    font-size: 15px;
    text-align: center;
    display: block;
    padding-top: 10px;

    div {
      display: inline-block;
      padding: 0 8px;

      span {
        font-size: 11px;
        padding: 2px;
      }
    }
  }

  .rank {
    position: relative;

    .crown {
      vertical-align: sub;
      margin: auto;
    }

    .number {
      position: absolute;
      left: 25%;
      font-size: 45px;
      font-weight: bold;
      z-index: 1;
      margin: 0 auto;
      color: #ffffff;
      text-shadow: 2px 2px 1px #2c3e50, -2px 2px 1px #2c3e50,
        2px -2px 1px #2c3e50, -2px -2px 1px #2c3e50;
    }
  }
}
</style>

<style lang="scss">
// .v-card .crown:first-child {
//   color: #DBB400;
//   // #C9CACA
//   // #C47022
// }
</style>
