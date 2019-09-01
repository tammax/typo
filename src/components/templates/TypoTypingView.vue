<template lang="pug">
  div
    TypoScoreBoard
    TypoWordTimeGage
    TypoTypingWord
    TypoTopButton
</template>

<script>
import TypoScoreBoard from "@/components/molecules/TypoScoreBoard.vue";
import TypoWordTimeGage from "@/components/atoms/TypoWordTimeGage.vue";
import TypoTypingWord from "@/components/molecules/TypoTypingWord.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";


export default {
  name: "TypoTypingView",
  components: {
    TypoScoreBoard,
    TypoWordTimeGage,
    TypoTypingWord,
    TypoTopButton
  }
};
</script>

<style scoped></style>
