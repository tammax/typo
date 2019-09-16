<template lang="pug">
  v-card
    v-card-text
      div.heading Chain
      div.value {{ chainCount }}
      TypoBadge(:count="chainCount")
</template>

<script>
import { mapState } from "vuex";
import TypoBadge from "@/components/atoms/TypoBadge.vue";

export default {
  name: "TypoChainCount",
  components: {
    TypoBadge
  },
  computed: {
    ...mapState("play", ["chainCount"])
  }
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 12px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
}

.value {
  font-size: 20px;
  margin: 0;
}
</style>
