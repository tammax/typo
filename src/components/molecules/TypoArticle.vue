<template lang="pug">

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

<style lang="scss" scoped>
.box {
  padding: 10px;
}
</style>
