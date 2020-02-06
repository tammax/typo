<template lang="pug">
  v-progress-linear(v-model="wordTime")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoWordTimeGage",
  computed: {
    ...mapState("play", ["wordTime"])
  },
  mounted() {
    this.start();
  },
  destroyed() {
    this.resetWordTimer();
  },
  methods: {
    ...mapActions("play", [
      "subtractWordTime",
      "nextWord",
      "setWordTimer",
      "resetWordTimer"
    ]),
    start() {
      let timer = setInterval(() => {
        if (this.wordTime > 0) {
          this.subtractWordTime(10);
        } else {
          //単語をリセット
          this.nextWord();
          this.resetWordTimer();
          this.start();
        }
      }, 1000);
      this.setWordTimer(timer);
    }
  }
};
</script>
