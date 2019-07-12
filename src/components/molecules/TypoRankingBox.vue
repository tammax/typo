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
                TypoRankingMaxChain(:maxChain="ranking.maxChainCount")
                TypoRankingCorrectRate(:rate="ranking.rate")
            v-divider(v-if="index + 1 < rankings.length" :key="index + 100")
</template>

<script>
import TypoRankingRank from "@/components/atoms/TypoRankingRank.vue";
import TypoRankingScore from "@/components/atoms/TypoRankingScore.vue";
import TypoRankingMaxChain from "@/components/atoms/TypoRankingMaxChain.vue";
import TypoRankingCorrectRate from "@/components/atoms/TypoRankingCorrectRate.vue";

export default {
  name: "TypoRankingBox",
  components: {
    TypoRankingRank,
    TypoRankingScore,
    TypoRankingMaxChain,
    TypoRankingCorrectRate
  },
  props: {
    rankings: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
