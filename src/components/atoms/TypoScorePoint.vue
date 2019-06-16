<template>
  <div id="row">
    <div class="heading">Score</div>
    <div class="value">{{ score | commaSeparate }}</div>
    <transition v-on:after-enter="scoreBadge = false">
      <div class="badge" v-show="scoreBadge">
        +{{ addScore | commaSeparate }}
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TypoScorePoint",
  data() {
    return {
      addScore: 0,
      scoreBadge: false
    };
  },
  computed: {
    ...mapState(["score"])
  },
  watch: {
    score(after, before) {
      this.addScore = after - before;
      this.scoreBadge = true;
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
