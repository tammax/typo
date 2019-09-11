<template lang="pug">
  div#row
    div.heading Score
    div.value {{ score | commaSeparate }}
    div.value {{ chainCount }}
    transition(v-on:after-enter="currentState = ''")
      div(v-show="currentState")
        div.badge.plus(v-show="isPlus") +{{ addScore }}
        div.badge.minus(v-show="isMinus") -{{ addScore }}
</template>

<script>
const IS_PLUS = "IS_PLUS";
const IS_MINUS = "IS_MINUS";

import { mapState } from "vuex";

export default {
  name: "TypoScorePoint",
  data() {
    return {
      addScore: 0,
      currentState: ""
    };
  },
  computed: {
    ...mapState("play", ["score"]),
    isPlus() {
      return this.currentState === IS_PLUS;
    },
    isMinus() {
      return this.currentState === IS_MINUS;
    }
  },
  watch: {
    score(after, before) {
      this.addScore = after - before;
      if (this.addScore >= 0) {
        this.currentState = IS_PLUS;
      } else {
        this.addScore = Math.abs(this.addScore);
        this.currentState = IS_MINUS;
      }
    }
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

  .badge {
    position: absolute;
    right: 0;
    top: -10px;
    padding: 0;
    z-index: 1;
    font-weight: bold;
    font-size: 12px;

    &.plus {
      color: #2196f3;
    }
    &.minus {
      color: #ff6200;
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s;
}

.v-enter,
.v-leave-to {
  opacity: 1;
}
</style>
