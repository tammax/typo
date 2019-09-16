<template lang="pug">
  div
    TypoHeading Setting
    v-layout(row)
      v-flex(xs12 sm4 offset-sm4)
        v-card
          v-list(one-line)
            TypoSettingSound
          v-divider
          v-list(one-line)
            TypoSettingTheme
    TypoTopButton
</template>

<script>
import TypoHeading from "@/components/atoms/TypoHeading.vue";
import TypoSettingSound from "@/components/atoms/TypoSettingSound.vue";
import TypoSettingTheme from "@/components/atoms/TypoSettingTheme.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoSettingView",
  components: {
    TypoHeading,
    TypoTopButton,
    TypoSettingTheme,
    TypoSettingSound
  }
};
</script>
