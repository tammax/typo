<template lang="pug">
  <div>
    <p>ランキングページ</p>
    <ul>
      <li v-for="(ranking, index) in rankings" :key="index">
        <v-icon>fa-crown</v-icon>
        <div>{{ index + 1 }}</div>
        <div>{{ ranking.score }}</div>
        <div>{{ ranking.maxChainCount }}</div>
        <div>{{ ranking.successCount }}</div>
        <div>{{ ranking.missCount }}</div>
      </li>
    </ul>
    <TypoRankingBox />
  </div>
</template>

<script>
import TypoRankingBox from '@/components/molecules/TypoRankingBox.vue';
import {db} from '@/config/firebase';

export default {
  name: 'TypoTotalRanking',
  data() {
    return {
      rankings: []
    }
  },
  components: {
    TypoRankingBox
  },
  mounted() {
    db.collection("playResults").orderBy("score", "desc").limit(5)
    .get()
    .then((data) => {
      data.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        this.rankings.push(doc.data());
      })
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  },
}
</script>