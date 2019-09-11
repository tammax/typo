<template lang="pug">
  div
    TypoHeading Ranking
    v-tabs(v-model="tabs" color="transparent")
      v-layout(row align-space-around)
        v-flex(xs12 sm4 offset-sm4)
          v-tab Total
          v-tab Daily
    v-tabs-items(v-model="tabs")
      v-tab-item
        TypoTotalRanking
      v-tab-item
        TypoDailyRanking
    TypoTopButton
</template>

<script>
import TypoDailyRanking from "@/components/organisms/TypoDailyRanking.vue";
import TypoTotalRanking from "@/components/organisms/TypoTotalRanking.vue";
import TypoHeading from "@/components/atoms/TypoHeading.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoRankingView",
  data() {
    return {
      tabs: null
    };
  },
  components: {
    TypoDailyRanking,
    TypoTotalRanking,
    TypoHeading,
    TypoTopButton
  }
};
</script>

<style scoped>
.v-tabs__div {
  width: 50%;
}
</style>
