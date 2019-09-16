<template lang="pug">
  transition(v-on:after-enter="currentState = ''")
    div(v-show="currentState")
      div.badge.plus(v-show="isPlus") +{{ addCount }}
      div.badge.minus(v-show="isMinus") -{{ addCount }}
</template>

<script>
const IS_PLUS = "IS_PLUS";
const IS_MINUS = "IS_MINUS";

export default {
  name: "TypoBadge",
  data() {
    return {
      currentState: ""
    };
  },
  props: {
    count: Number
  },
  computed: {
    isPlus() {
      return this.currentState === IS_PLUS;
    },
    isMinus() {
      return this.currentState === IS_MINUS;
    }
  },
  watch: {
    count(after, before) {
      this.addCount = after - before;
      if (this.addCount >= 0) {
        this.currentState = IS_PLUS;
      } else {
        this.addCount = Math.abs(this.addCount);
        this.currentState = IS_MINUS;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
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
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s;
}

.v-enter,
.v-leave-to {
  opacity: 1;
}
</style>
