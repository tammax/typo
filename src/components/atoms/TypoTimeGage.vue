<template lang="pug">
  div
    v-progress-circular(
      :rotate="-90"
      :size="100"
      :width="15"
      :value="playTime"
      color="blue"
    ) {{ playTime }}
</template>

<script>
//import { mapState, mapActions } from "vuex";
//import { mapActions } from "vuex";

const PLAY_TIME = 30;

export default {
  name: "TypoTimeGage",
  data() {
    return {
      playTime: PLAY_TIME,
      timer: null
    };
  },
  // computed: {
  //   ...mapState(["playTime"])
  // },
  mounted() {
    this.start();
  },
  destroyed() {
    this.reset();
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        if (this.playTime > 0) {
          this.playTime--;
        } else {
          this.$router.push({ path: "result" });
        }
      }, 1000);
    },
    reset() {
      clearInterval(this.timer);
      this.playTime = PLAY_TIME;
    }
  }
};
</script>
