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
                  TypoScoreBadge(:count="score")
                    span(slot="label") Score
                v-flex(d-flex xs6 md12 align-self-center)
                  TypoScoreBadge(:count="chainCount")
                    span(slot="label") Chain
</template>

<script>
import { mapState } from "vuex";
import TypoScoreBadge from "@/components/molecules/TypoScoreBadge.vue";
import TypoTimeGage from "@/components/atoms/TypoTimeGage.vue";

export default {
  name: "TypoScoreBoard",
  components: {
    TypoScoreBadge,
    TypoTimeGage
  },
  computed: {
    ...mapState("play", ["chainCount", "score"])
  }
};
</script>
