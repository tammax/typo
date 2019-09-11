<template lang="pug">
  div
    template(v-if="hasRankingData")
      TypoRankingBox(:rankings="rankings")
    template()
      v-container
            v-card
              v-card-text
                div.headline.mb-2 No ranking data
                div There is currently no ranking data. To play, please press the button below.
            div.button
              v-btn(flat to="/typing" large block) Start Typing
      //- v-row
      //-   v-col
      //-     v-card
      //-       v-card-text
      //-         div.headline.mb-2 No ranking data
      //-         div There is currently no ranking data. To play, please press the button below.
      //-     div.button
      //-       v-btn(flat to="/typing" large block) Start Typing
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
  computed: {
    hasRankingData() {
      return this.rankings.length > 0;
    }
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

<style lang="scss" scoped>
.button {
  width: 90%;
  margin: 0 auto;
}
</style>
