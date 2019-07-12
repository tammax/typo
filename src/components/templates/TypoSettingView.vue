<template lang="pug">
  div
    h1 Setting
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-list(one-line)
            template
              TypoSettingSound
          v-list(one-line)
            template
              TypoSettingTheme
    TypoTopButton
</template>

<script>
import TypoSettingSound from "@/components/atoms/TypoSettingSound.vue";
import TypoSettingTheme from "@/components/atoms/TypoSettingTheme.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoSettingView",
  components: {
    TypoTopButton,
    TypoSettingTheme,
    TypoSettingSound
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: #cccccc;
}
</style>
