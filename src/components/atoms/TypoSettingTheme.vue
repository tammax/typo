<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Dark Mode
      v-flex(xs6)
        v-switch(v-model="isDarkMode")
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoSettingTheme",
  computed: {
    ...mapState("setting", ["mode"])
  },
  data() {
    return {
      isDarkMode: true
    };
  },
  created() {
    // Modeが今後増える可能性があるので、FlgではなくCodeとして管理しておく
    this.isDarkMode = this.mode === "dark";
    this.$watch("isDarkMode", function(newVal) {
      console.log("watch");
      let mode = newVal ? "dark" : "light";
      this.setMode(mode);
    });
  },
  methods: {
    ...mapActions("setting", ["setMode"])
  }
};
</script>

<style lang="scss" scoped>
.v-subheader {
  font-size: 18px;
}
</style>
