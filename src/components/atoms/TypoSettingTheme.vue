<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Dark Mode
      v-flex(xs6)
        toggle-button.switch-button(v-model="isDarkMode" :height="35" :width="75" :color="{checked: '#1976d2', unchecked: '#cccccc'}")
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  name: "TypoSettingTheme",
  computed: {
    ...mapState("setting", ["mode"])
  },
  components: {
    ToggleButton
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
