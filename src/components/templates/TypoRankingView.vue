<template lang="pug">
  div
    TypoHeading Ranking
    TypoTotalRanking
    TypoTopButton
</template>

<script>
// import TypoDailyRanking from "@/components/organisms/TypoDailyRanking.vue";
import TypoTotalRanking from "@/components/organisms/TypoTotalRanking.vue";
import TypoHeading from "@/components/atoms/TypoHeading.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoRankingView",
  components: {
    // TypoDailyRanking,
    TypoTotalRanking,
    TypoHeading,
    TypoTopButton
  }
};
</script>
