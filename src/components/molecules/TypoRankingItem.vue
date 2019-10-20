<template lang="pug">
  v-layout(row align-space-around)
    v-flex(xs12 sm4 offset-sm4)
      v-card
        v-list(three-line)
            template(v-for="(ranking, index) in rankings")
                v-list-tile(:key="index").box
                  TypoCrown(:index="index")
                  v-list-tile-content
                    TypoRankingItemRow
                      span(slot="label") Score
                      span {{ranking.score}}
                      span(slot="unit") point
                    TypoRankingItemRow
                      span(slot="label") Max Chain
                      span {{ranking.maxChainCount}}
                      span(slot="unit") chain
                    TypoRankingItemRow
                      span(slot="label") Correct Rate
                      span {{ranking.rate}}
                      span(slot="unit") %
                v-divider(v-if="index + 1 < rankings.length" :key="index + 1000")
</template>

<script>
import TypoCrown from "@/components/atoms/TypoCrown.vue";
import TypoRankingItemRow from "@/components/molecules/TypoRankingItemRow.vue";

export default {
  name: "TypoRankingItem",
  components: {
    TypoCrown,
    TypoRankingItemRow
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
