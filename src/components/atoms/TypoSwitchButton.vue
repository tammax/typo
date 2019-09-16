<template lang="pug">
  toggle-button.switch-button(v-model="switchFlg" :height="33" :width="70" :color="{checked: '#1976d2', unchecked: '#cccccc'}")
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";

export default {
  name: "TypoSwitchButton",
  props: {
    switchFlg: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ToggleButton
  },
  watch: {
    switchFlg(newVal) {
      this.$emit("set", newVal);
    }
  }
};
</script>
