<template lang="pug">
  div
    h1 RANKING
    TypoTotalRanking
    TypoTopButton
</template>

<script>
// import TypoDailyRanking from "@/components/organisms/TypoDailyRanking.vue";
import TypoTotalRanking from "@/components/organisms/TypoTotalRanking.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoRankingView",
  components: {
    // TypoDailyRanking,
    TypoTotalRanking,
    TypoTopButton
  }
};
</script>

<style scoped>
h1 {
  color: #ffffff;
}
</style>
