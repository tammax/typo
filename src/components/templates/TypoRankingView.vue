<template>
  <div>
    <p>ランキングページ</p>
    <!-- <ul>
      <li v-for="(ranking, index) in rankings" :key="index">
        <v-icon>fa-crown</v-icon>
        <div>{{ index + 1 }}</div>
        <div>{{ ranking.score }}</div>
        <div>{{ ranking.maxChainCount }}</div>
        <div>{{ ranking.successCount }}</div>
        <div>{{ ranking.missCount }}</div>
      </li>
    </ul> -->
    <TypoDailyRanking />
    <TypoTotalRanking />
  </div>
</template>

<script>

import TypoDailyRanking from '@/components/molecules/TypoDailyRanking.vue';
import TypoTotalRanking from '@/components/molecules/TypoTotalRanking.vue';


//import {db} from '@/config/firebase';

export default {
  name: 'TypoRankingView',
  // data() {
  //   return {
  //     rankings: []
  //   }
  // },
  components: {
    TypoDailyRanking,
    TypoTotalRanking,
  },
  // mounted() {
  //   db.collection("playResults").orderBy("score", "desc").limit(5)
  //   .get()
  //   .then((data) => {
  //     data.forEach((doc) => {
  //       console.log(doc.id, " => ", doc.data());
  //       this.rankings.push(doc.data());
  //     })
  //   })
  //   .catch(function(error) {
  //     console.log("Error getting document:", error);
  //   });
  // }}
}
</script>

<style scoped>

</style>
