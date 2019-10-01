<template lang="pug">
  div
    TypoHeading Result
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-layout(row wrap)
            v-flex(d-flex xs12 md6 align-self-center)
              TypoNotice
                  v-card-text(v-if="totalRank > 0") Total   {{totalRank}}nd
                  v-card-text(v-else-if="totalRank == 0") Total no Rank...
                  v-card-text(v-else)
            v-flex(d-flex xs12 md6 align-self-center)
              TypoNotice
                  v-card-text(v-if="dailyRank > 0") Daily   {{dailyRank}}nd
                  v-card-text(v-else-if="dailyRank == 0") Daily no Rank...
                  v-card-text(v-else)
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Score
              span {{score}}
              span(slot="unit") pt
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Max Chain
              span {{maxChainCount}}
              span(slot="unit") chain
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Correct Rate
              span {{correctRate}}
              span(slot="unit") %
          v-list(one-line)
            template
              TypoResultMissKeys(:missKeys="missKeys")
    TypoTopButton
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/config/firebase";
import _ from "lodash";
import dateformat from "dateformat";
import TypoHeading from "@/components/atoms/TypoHeading.vue";
import TypoResultItemRow from "@/components/molecules/TypoResultItemRow.vue";
import TypoResultMissKeys from "@/components/molecules/TypoResultMissKeys.vue";
import TypoResultTotalRank from "@/components/atoms/TypoResultTotalRank.vue";
import TypoNotice from "@/components/atoms/TypoNotice.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoResutlView",
  components: {
    TypoHeading,
    TypoResultTotalRank,
    TypoResultItemRow,
    TypoResultMissKeys,
    TypoNotice,
    TypoTopButton
  },
  data() {
    return {
      totalRank: 0,
      dailyRank: 0
    };
  },
  computed: {
    correctRate() {
      let totalCount = this.missCount + this.successCount;
      if (totalCount <= 0) {
        return 0;
      }
      return Math.round((this.successCount / totalCount) * 1000) / 10;
    },
    ...mapState("play", [
      "score",
      "chainCount",
      "successCount",
      "missCount",
      "maxChainCount",
      "missKeys"
    ])
  },
  mounted() {
    //ゲーム結果の登録、総合順位の取得
    let date = new Date();
    let today = Number(dateformat(date, "yyyymmdd"));
    this.requestApi(today);
  },
  methods: {
    async requestApi(today) {
      let id = await this.registerScore(today);
      this.totalRank = await this.getTotalRank(id);
      this.dailyRank = await this.getDailyRank(id, today);
    },
    registerScore(today) {
      return new Promise(resolve => {
        db.collection("playResults")
          .add({
            score: this.score,
            maxChainCount: this.maxChainCount,
            successCount: this.successCount,
            missCount: this.missCount,
            misskeys: this.missKeys,
            rate: this.correctRate,
            date: today,
            createdAt: new Date()
          })
          .then(function({ id }) {
            console.log(`document writing sucess: id ${id}`);
            resolve(id);
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });
      });
    },
    getTotalRank(id) {
      return new Promise(resolve => {
        db.collection("playResults")
          .orderBy("score", "desc")
          .orderBy("maxChainCount", "desc")
          .orderBy("successCount", "desc")
          .limit(10)
          .get()
          .then(data => {
            let rankings = [];
            data.forEach(doc => {
              let ranking = doc.data();
              ranking["id"] = doc.id;
              rankings.push(ranking);
            });
            let rank = _.findIndex(rankings, ["id", id]) + 1;
            console.log(rank);
            resolve(rank);
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      });
    },
    getDailyRank(id, today) {
      return new Promise(resolve => {
        db.collection("playResults")
          .where("date", "==", today)
          .orderBy("score", "desc")
          .orderBy("maxChainCount", "desc")
          .orderBy("successCount", "desc")
          .limit(10)
          .get()
          .then(data => {
            let rankings = [];
            data.forEach(doc => {
              let ranking = doc.data();
              ranking["id"] = doc.id;
              rankings.push(ranking);
            });
            let rank = _.findIndex(rankings, ["id", id]) + 1;
            console.log(rank);
            resolve(rank);
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #ffffff;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
