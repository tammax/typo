<template lang="pug">
  <div>
    <p>日時ランキングページ</p>
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
  </div>
</template>

<script>
import {db} from '@/config/firebase';
import firebase from 'firebase/app';
//firebase.firestore.Timestamp.now()
import clonedeep from 'lodash/cloneDeep';

export default {
  name: 'TypoDailyRanking',
  data() {
    return {
      rankings: []
    }
  },
  components: {},
  mounted() {
    let today = new Date(new Date().toDateString());
    let tomorrow = clonedeep(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    db.collection("playResults")
    // .orderBy("score", "desc")
    // .orderBy("createdAt", "desc")
//    .endAt("createdAt", tomorrow)
///    .endAt(tomorrow)
    // .orderBy("createdAt", "desc")
//     .where("score", ">",  0)
     .where("createdAt", ">",  today)
     .where("createdAt", "<",  tomorrow)
    // .orderBy("createdAt", "desc")
    .limit(5)
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