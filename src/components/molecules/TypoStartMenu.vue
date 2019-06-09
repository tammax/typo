<template lang="pug">
  div
    h1 Typo
    TypoStartButton
    TypoRankingButton
</template>

<script>
import TypoStartButton from "@/components/atoms/TypoStartButton.vue";
import TypoRankingButton from "@/components/atoms/TypoRankingButton.vue";

export default {
  name: 'TypoStartMenu',
  components: {
    TypoStartButton,
    TypoRankingButton
  }
}
</script>