<template lang="pug">
  div
    TypoHeading Result
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Total
              span(slot="value")
                transition
                    span(v-if="totalRank > 0") {{totalRank}}
                    span(v-else-if="totalRank === 0") 圏外
                    span(v-else)
              span(v-if="totalRank > 0")(slot="unit") 位
          v-divider

          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Daily
              span(slot="value")
                transition
                    span(v-if="dailyRank > 0") {{dailyRank}}
                    span(v-else-if="dailyRank === 0") 圏外
                    span(v-else)
              span(v-if="dailyRank > 0")(slot="unit") 位
          v-divider

          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Score
              span(slot="value") {{score}}
              span(slot="unit") pt
          v-divider
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Max Chain
              span(slot="value") {{maxChainCount}}
              span(slot="unit") ch
          v-divider
          v-list(one-line)
            TypoResultItemRow
              span(slot="name") Correct Rate
              span(slot="value") {{correctRate}}
              span(slot="unit") %
          v-divider(v-if="hasMissKeys")
          v-list(one-line)(v-if="hasMissKeys")
            template
              TypoResultMissKeys(:missKeys="missKeys")
    TypoTopButton
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/config/firebase";
import { rankingCount } from "@/helper/const.js";
import { findIndex } from "lodash";
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
      totalRank: null,
      dailyRank: null
    };
  },
  computed: {
    hasMissKeys() {
      return Object.keys(this.missKeys).length > 0;
    },
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
          .limit(rankingCount)
          .get()
          .then(data => {
            let rankings = [];
            data.forEach(doc => {
              let ranking = doc.data();
              ranking["id"] = doc.id;
              rankings.push(ranking);
            });
            let rank = findIndex(rankings, ["id", id]) + 1;
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
          .limit(rankingCount)
          .get()
          .then(data => {
            let rankings = [];
            data.forEach(doc => {
              let ranking = doc.data();
              ranking["id"] = doc.id;
              rankings.push(ranking);
            });
            let rank = findIndex(rankings, ["id", id]) + 1;
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
