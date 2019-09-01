<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Sound
      v-flex(xs6)
        toggle-button.switch-button(v-model="useSound" :height="35" :width="75" :color="{checked: '#1976d2', unchecked: '#cccccc'}")
</template>

<script>
import { mapState, mapActions } from "vuex";
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  name: "TypoSettingSound",
  data() {
    return {
      useSound: true
    };
  },
  components: {
    ToggleButton
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
