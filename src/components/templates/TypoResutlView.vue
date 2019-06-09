<template>
  <div></div>
</template>

<script>

import { mapState } from 'vuex';
import {db} from '@/config/firebase';

export default {
  name: 'TypoResutlView',
  computed: {
    ...mapState([
      'score',
      'chainCount',
      'successCount',
      'missCount',
      'maxChainCount',
      'missKeys',
    ])
  },
  mounted() {
    db.collection("playResults").add({
        score: this.score,
        maxChainCount: this.maxChainCount,
        successCount: this.successCount,
        missCount: this.missCount,
        misskeys: this.missKeys,
        createdAt: new Date(),
    })
    .then(function({ id }) {
        console.log(`document writing sucess: id ${id}`);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
  },
}
</script>

<style scoped>

</style>
