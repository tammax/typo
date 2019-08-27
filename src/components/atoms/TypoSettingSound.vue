<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Sound
      v-flex(xs6)
        v-switch(v-model="useSound")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoSettingSound",
  data() {
    return {
      useSound: true
    };
  },
  computed: {
    ...mapState("setting", ["soundFlg"])
  },
  created() {
    this.useSound = this.soundFlg;
    this.$watch("useSound", function(newVal) {
      this.setSoundFlg(newVal);
    });
  },
  methods: {
    ...mapActions("setting", ["setSoundFlg"])
  }
};
</script>

<style lang="scss" scoped>
.v-subheader {
  font-size: 18px;
}
</style>
