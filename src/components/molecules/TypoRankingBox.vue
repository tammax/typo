<template lang="pug">
  v-layout(row align-space-around)
    v-flex(xs12 sm4 offset-sm4)
      v-card
        v-list(three-line)
          template(v-for="(ranking, index) in rankings")
            v-list-tile(:key="index")
              v-list-tile-action.rank
                v-icon.crown(v-if="index === 0" large color="#DBB400") fa-crown
                v-icon.crown(v-else-if="index === 1" large color="#C9CACA") fa-crown
                v-icon.crown(v-else-if="index === 2" large color="#C47022") fa-crown
                v-list-tile-action-text.number {{ index + 1 }}
              v-list-tile-content
                v-list-tile-title.score {{ ranking.score }}
                  span pt
                v-list-tile-sub-title.chain-rate
                  div {{ ranking.maxChainCount }}
                    span chain
                  div {{ ranking.rate }}
                    span %
            v-divider(v-if="index + 1 < rankings.length" :key="index + 100")
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
