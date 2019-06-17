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
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoTimeGage",
  computed: {
    ...mapState(["playTime"])
  },
  mounted() {
    this.start();
  },
  methods: {
    ...mapActions(["subtractPlayTime", "setPlayTimer", "resetPlayTimer"]),
    start() {
      this.resetPlayTimer();
      let timer = setInterval(() => {
        if (this.playTime > 0) {
          this.subtractPlayTime(1);
        } else {
          this.resetPlayTimer();
          this.$router.push({ path: "result" });
        }
      }, 1000);
      this.setPlayTimer(timer);
    }
  }
};
</script>
