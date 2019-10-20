<template lang="pug">
  div
    TypoRankingItem(:rankings="rankings")
</template>

<script>
import TypoRankingItem from "@/components/molecules/TypoRankingItem.vue";
import { db } from "@/config/firebase";
import { rankingCount } from "@/helper/const.js";

export default {
  name: "TypoTotalRanking",
  data() {
    return {
      rankings: []
    };
  },
  components: {
    TypoRankingItem
  },
  mounted() {
    db.collection("playResults")
      .orderBy("score", "desc")
      .orderBy("maxChainCount", "desc")
      .orderBy("successCount", "desc")
      .limit(rankingCount)
      .get()
      .then(data => {
        data.forEach(doc => {
          this.rankings.push(doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
};
</script>
