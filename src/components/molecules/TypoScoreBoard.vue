<template lang="pug">
  div
    v-container(fluid grid-list-md)
      v-layout(row wrap align-space-around justify-center)
        v-flex(d-flex xs12 sm6 md2)
          v-card
            v-card-text
              TypoTimeGage
        v-flex(d-flex xs12 sm6 md3)
          v-layout(row wrap)
            v-flex(d-flex)
              v-layout(row wrap)
                v-flex(d-flex xs6 md12 align-self-center)
                  v-card
                    v-card-text
                      TypoScorePoint
                v-flex(d-flex xs6 md12 align-self-center)
                  v-card
                    v-card-text
                      TypoChainCount
</template>

<script>
import TypoChainCount from "@/components/atoms/TypoChainCount.vue";
import TypoScorePoint from "@/components/atoms/TypoScorePoint.vue";
import TypoTimeGage from "@/components/atoms/TypoTimeGage.vue";

export default {
  name: "TypoScoreBoard",
  components: {
    TypoScorePoint,
    TypoChainCount,
    TypoTimeGage
  }
};
</script>
