<template lang="pug">
  div
    TypoRankingBox(:rankings="rankings")
</template>

<script>
import TypoRankingBox from "@/components/molecules/TypoRankingBox.vue";
import { db } from "@/config/firebase";

export default {
  name: "TypoTotalRanking",
  data() {
    return {
      rankings: []
    };
  },
  components: {
    TypoRankingBox
  },
  mounted() {
    db.collection("playResults")
      .orderBy("score", "desc")
      .orderBy("maxChainCount", "desc")
      .orderBy("successCount", "desc")
      .limit(10)
      .get()
      .then(data => {
        data.forEach(doc => {
          // console.log(doc.id, " => ", doc.data());
          this.rankings.push(doc.data());
        });
      });
    // .catch(function(error) {
    //   console.log("Error getting document:", error);
    // });
  }
};
</script>
