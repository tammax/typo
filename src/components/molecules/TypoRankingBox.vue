<template lang="pug">
  v-layout(row align-space-around)
    v-flex(xs12 sm4 offset-sm4)
      v-card
        v-list(three-line)
          template(v-for="(ranking, index) in rankings")
            v-list-tile(:key="index")
              TypoRankingRank(:index="index")
              v-list-tile-content
                TypoRankingScore(:score="ranking.score")
                v-list-tile-sub-title.chain-rate
                  div {{ ranking.maxChainCount }}
                    span chain
                  div {{ ranking.rate }}
                    span %
            v-divider(v-if="index + 1 < rankings.length" :key="index + 100")
</template>

<script>
import TypoRankingRank from "@/components/atoms/TypoRankingRank.vue";
import TypoRankingScore from "@/components/atoms/TypoRankingScore.vue";

export default {
  name: "TypoRankingBox",
  components: {
    TypoRankingRank,
    TypoRankingScore
  },
  props: {
    rankings: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list__tile {
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
}
</style>
