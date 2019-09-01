<template lang="pug">
  div
    TypoRankingBox(:rankings="rankings")
</template>

<script>
import TypoRankingBox from "@/components/molecules/TypoRankingBox.vue";
import _ from "lodash";
import { db } from "@/config/firebase";

export default {
  name: "TypoDailyRanking",
  data() {
    return {
      rankings: []
    };
  },
  components: {
    TypoRankingBox
  },
  mounted() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let startDate = _.cloneDeep(date);
    date.setDate(date.getDate() + 1);
    let endDate = date;

    db.collection("playResults")
      .orderBy("createdAt", "asc")
      .startAt(startDate)
      .endBefore(endDate)
      .limit(10)
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
