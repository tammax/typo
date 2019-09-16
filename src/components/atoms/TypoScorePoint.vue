<template lang="pug">
  v-card
    v-card-text
      div#row
        div.heading Score
        div.value {{ score | commaSeparate }}
        TypoBadge(:count="score")
</template>

<script>
import { mapState } from "vuex";
import TypoBadge from "@/components/atoms/TypoBadge.vue";

export default {
  name: "TypoScorePoint",
  components: {
    TypoBadge
  },
  computed: {
    ...mapState("play", ["score"])
  },
  filters: {
    commaSeparate(num) {
      return num.toLocaleString();
    }
  }
};
</script>

<style lang="scss" scoped>
#row {
  position: relative;

  .heading {
    font-size: 12px;
    position: absolute;
    top: -10px;
  }

  .value {
    font-size: 20px;
    margin: 0;
  }
}
</style>
