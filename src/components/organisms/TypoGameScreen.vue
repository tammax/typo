<template lang="pug">
  div
    TypoScoreBoard
    TypoWordTimeGage
    TypoTypingWord
</template>

<script>
import TypoScoreBoard from "@/components/molecules/TypoScoreBoard.vue";
import TypoWordTimeGage from "@/components/atoms/TypoWordTimeGage.vue";
import TypoTypingWord from "@/components/molecules/TypoTypingWord.vue";

export default {
  name: "TypoGameScreen",
  components: {
    TypoScoreBoard,
    TypoWordTimeGage,
    TypoTypingWord
  }
};
</script>
