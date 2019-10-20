<template lang="pug">
  div
    template(v-if="hasRankingData")
      TypoRankingItem(:rankings="rankings")
    template(v-else)
      TypoRankingNoData
</template>
<script>
import TypoRankingItem from "@/components/molecules/TypoRankingItem.vue";
import TypoRankingNoData from "@/components/molecules/TypoRankingNoData.vue";
import dateformat from "dateformat";
import { db } from "@/config/firebase";
import { rankingCount } from "@/helper/const.js";

export default {
  name: "TypoDailyRanking",
  data() {
    return {
      rankings: []
    };
  },
  computed: {
    hasRankingData() {
      return Object.keys(this.rankings).length > 0;
    }
  },
  components: {
    TypoRankingItem,
    TypoRankingNoData
  },
  mounted() {
    let date = new Date();
    let today = Number(dateformat(date, "yyyymmdd"));
    db.collection("playResults")
      .where("date", "==", today)
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

<style lang="scss" scoped>
.button {
  width: 90%;
  margin: 0 auto;
}

.box {
  padding: 10px;
}
</style>
