<template lang="pug">
  div
    TypoGameScreen
    TypoTopButton
</template>

<script>
import TypoGameScreen from "@/components/organisms/TypoGameScreen.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoTypingView",
  components: {
    TypoGameScreen,
    TypoTopButton
  }
};
</script>

<style scoped></style>
