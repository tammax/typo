<template lang="pug">
  div
    h1 RESULT
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-list(one-line)
            template
              TypoResultTotalRank(:rank="rank")
              TypoResultScore(:score="score")
          v-list(one-line)
            template
              TypoResultMaxChainCount(:maxChainCount="maxChainCount")
          v-list(one-line)
            template
              TypoResultCorrectRate(:correctRate="correctRate")
          v-list(one-line)
            template
              TypoResultMissKeys(:missKeys="missKeys")
    TypoTopButton
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/config/firebase";
import TypoResultMissKeys from "@/components/molecules/TypoResultMissKeys.vue";
import TypoResultTotalRank from "@/components/atoms/TypoResultTotalRank.vue";
import TypoResultScore from "@/components/atoms/TypoResultScore.vue";
import TypoResultMaxChainCount from "@/components/atoms/TypoResultMaxChainCount.vue";
import TypoResultCorrectRate from "@/components/atoms/TypoResultCorrectRate.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";
import _ from "lodash";

export default {
  name: "TypoResutlView",
  components: {
    TypoResultMissKeys,
    TypoResultTotalRank,
    TypoResultScore,
    TypoResultMaxChainCount,
    TypoResultCorrectRate,
    TypoTopButton
  },
  data() {
    return {
      rank: 0
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
    ...mapState([
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
    this.requestApi();
  },
  methods: {
    async requestApi() {
      let id = await this.registerScore();
      let rank = await this.getRank(id);
      this.rank = rank;
    },
    registerScore() {
      return new Promise(resolve => {
        db.collection("playResults")
          .add({
            score: this.score,
            maxChainCount: this.maxChainCount,
            successCount: this.successCount,
            missCount: this.missCount,
            misskeys: this.missKeys,
            rate: this.correctRate,
            createdAt: new Date()
          })
          .then(function({ id }) {
            // console.log(`document writing sucess: id ${id}`);
            resolve(id);
          });
        // .catch(function(error) {
        //   console.error("Error writing document: ", error);
        // });
      });
    },
    getRank(id) {
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
          });
        // .catch(function(error) {
        //   console.log("Error getting document:", error);
        // });
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
