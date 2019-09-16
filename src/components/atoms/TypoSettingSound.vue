<template lang="pug">
  v-layout(row wrap align-center)
    v-flex(xs8)
      v-subheader Sound
    v-flex(xs4)
      TypoSwitchButton(:switchFlg="soundFlg" v-on:set="setSoundFlg")
</template>

<script>
import { mapState, mapActions } from "vuex";
import TypoSwitchButton from "@/components/atoms/TypoSwitchButton.vue";

export default {
  name: "TypoSettingSound",
  components: {
    TypoSwitchButton
  },
  computed: {
    ...mapState("setting", ["soundFlg"])
  },
  methods: {
    ...mapActions("setting", ["setSoundFlg"]),
  }
};
</script>