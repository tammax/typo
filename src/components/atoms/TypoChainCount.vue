<template lang="pug">
  div#row
    div.heading Chain
    div.value {{ chainCount }}
    transition(v-on:after-enter="currentState = ''")
      div(v-show="currentState")
        div.badge.plus(v-show="isPlus") +{{ addChain }}
        div.badge.minus(v-show="isMinus") -{{ addChain }}
</template>

<script>
const IS_PLUS = 'IS_PLUS';
const IS_MINUS = 'IS_MINUS';

import { mapState } from "vuex";

export default {
  name: "TypoChainCount",
  data() {
    return {
      addChain: 0,
      currentState: "",
    };
  },
  computed: {
    ...mapState("play", ["chainCount"]),
    isPlus() {
      return this.currentState === IS_PLUS;
    },
    isMinus() {
      return this.currentState === IS_MINUS;
    }
  },
  watch: {
    chainCount(after, before) {
      this.addChain = after - before;
      if (this.addChain >= 0) {
        this.currentState = IS_PLUS;
      } else  {
        this.addChain = Math.abs(this.addChain);
        this.currentState = IS_MINUS;
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
    padding: 2px;
    border-radius: 10px;
    min-width: 40px;
    color: #cccccc;
    font-weight: bold;

    &.plus {
      background: #2196f3;
      border: 4px solid #2196f3;
    }
    &.minus {
      background: #ff6200;
      border: 4px solid #ff6200;
    }
  }

}
.v-enter-active {
  transition: opacity 0.5s;
}
.v-leave-active {
  transition: opacity 14.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
