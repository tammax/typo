<template lang="pug">
  div#row
    div.heading Chain
    div.value {{ chainCount }}
    transition(v-on:after-enter="chainPlusBadge = false")
      div.badge(v-show="chainPlusBadge") +{{ addChain }}
    transition(v-on:after-enter="chainMinusBadge = false")
      div.badge(v-show="chainMinusBadge") {{ addChain }}
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TypoChainCount",
  data() {
    return {
      addChain: 0,
      chainPlusBadge: false,
      chainMinusBadge: false
    };
  },
  computed: {
    ...mapState(["chainCount"])
  },
  watch: {
    chainCount(after, before) {
      this.addChain = after - before;
      if (this.addChain >= 0) {
        this.chainPlusBadge = true;
      } else {
        this.chainMinusBadge = true;
      }
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

  .badge {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    background: #ff6200;
    padding: 2px;
    border: 4px solid #ff6200;
    border-radius: 10px;
    min-width: 40px;
    color: #cccccc;
    font-weight: bold;
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
