<template lang="pug">
  v-progress-linear(v-model="wordTime")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoWordTimeGage",
  computed: {
    ...mapState(["wordTime"])
  },
  mounted() {
    this.start();
  },
  methods: {
    ...mapActions([
      "subtractWordTime",
      "nextWord",
      "setWordTimer",
      "resetWordTimer"
    ]),
    start() {
      this.resetWordTimer();
      let timer = setInterval(() => {
        if (this.wordTime > 0) {
          this.subtractWordTime(4);
        } else {
          //単語をリセット
          this.nextWord();
          this.start();
        }
      }, 400);
      this.setWordTimer(timer);
    }
  }
};
</script>
