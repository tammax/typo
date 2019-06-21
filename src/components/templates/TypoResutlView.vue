<template lang="pug">
  div
    h1 RESULT
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-list(one-line)
            template
              transition
                div.alert(v-if="this.rank > 0") Total Rank {{ rank }}
              v-list-tile-action
                span.headname Score
              v-list-tile
                div.headline
                  p {{ score | commaSeparate }}
                    span pt
          v-list(one-line)
            template
              v-list-tile-action
                span.headname Max Chain
              v-list-tile
                div.headline
                  p {{ score | commaSeparate }}
                    span pt
          v-list(one-line)
            template
              v-list-tile-action
                span.headname Correct Rate
              v-list-tile
                div.headline
                  p {{ maxChainCount }}
                    span %
          v-list(one-line)
            template
              v-list-tile-action
                span.headname Miss Keys
              v-list-tile(v-for="(missKey, index) in missKeys" :key="index")
                div.misskeys
                  div.misskey {{ missKey.key }}
                  p {{ missKey.count  }}
                    span count
    TypoTopButton
</template>

<script>
import { mapState } from "vuex";
import { db } from "@/config/firebase";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";
import _ from "lodash";

export default {
  name: "TypoResutlView",
  components: {
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
  filters: {
    commaSeparate(num) {
      return num.toLocaleString();
    }
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

.alert {
  font-size: 22px;
  padding: 10px 0 35px 0;
  color: #ff6200;
  font-weight: bold;
}

.headname {
  padding: 0 10px;
  font-weight: bold;
  font-size: 15px;
  color: #ff6200;
}

.headline {
  width: 100%;

  p {
    text-align: right;

    span {
      font-size: 15px;
    }
  }
}

.misskeys {
  width: 100%;
  p {
    text-align: right;
    font-size: 18px !important;
    span {
      font-size: 13px;
    }
  }
  .misskey {
    position: absolute;
    left: 0;
    display: inline-block;
    text-align: left;
    font-size: 18px;
    padding-left: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
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
