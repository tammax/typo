<template>
  <div>
    <!-- <h1>Typ<v-icon>fa-comment-dots</v-icon></h1> -->
    <TypoStartMenu />
      <!-- <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
      <v-btn color="primary">primary</v-btn>

      <v-btn  depressed small color="primary">primary</v-btn>
      <v-btn depressed small  color="secondary">secondary</v-btn>
      <v-btn depressed small  color="accent">accent</v-btn>
      <v-btn  depressed small color="error">error</v-btn>

      <v-btn  flat small color="primary">primary</v-btn>
      <v-btn flat small  color="secondary">secondary</v-btn> -->

  </div>
</template>

<script>
import TypoStartMenu from '@/components/molecules/TypoStartMenu.vue';
//import {db} from '@/config/firebase';

export default {
  name: 'TypoStartView',
  components: {
    TypoStartMenu,
  },
  mounted() {
    // db.collection("playResults").add({
    //     score: 12200,
    //     maxChainCount: 212,
    //     successCount: 210,
    //     missCount: 42,
    //     misskeys: {
    //       'a' : 10,
    //       'd' : 21,
    //       'z' : 1,
    //       'x' : 10,
    //     },
    //     createdAt: new Date(),
    // })
    // .then(function({ id }) {
    //     console.log(`document writing sucess: id ${id}`);
    // })
    // .catch(function(error) {
    //     console.error("Error writing document: ", error);
    // });
  },
}
</script>

<style scoped>

</style>
