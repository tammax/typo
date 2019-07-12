<template lang="pug">
  div
    h1 RANKING
    TypoTotalRanking
    TypoTopButton
</template>

<script>

import TypoTotalRanking from "@/components/organisms/TypoTotalRanking.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoRankingView",
  components: {
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
