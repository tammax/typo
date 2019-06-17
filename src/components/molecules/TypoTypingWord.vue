<template lang="pug">
  div
    TypoEnWord(:letters="word.letters")
    TypoJpWord(:word="word.jp")
    input(v-if="isMobile" type="password" autofocus spellcheck="false")
</template>

<script>
import TypoEnWord from "@/components/atoms/TypoEnWord.vue";
import TypoJpWord from "@/components/atoms/TypoJpWord.vue";
import isMobile from "ismobilejs";
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoTypingWord",
  data: () => {
    return {
      isMobile: isMobile.any
    };
  },
  computed: {
    ...mapState(["word", "lettersCount", "chainCount"])
  },
  components: {
    TypoEnWord,
    TypoJpWord
  },
  mounted() {
    // storeデータのリセット
    this.resetStore();
    window.addEventListener("keyup", this.typeLetters, true);
    window.addEventListener("click", this.focusTypingArea, true);
    window.addEventListener("touchstart", this.focusTypingArea, true);
    this.focusTypingArea();
    this.nextWord();
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.typeLetters, true);
    window.removeEventListener("click", this.focusTypingArea, true);
    window.removeEventListener("touchstart", this.focusTypingArea, true);
  },
  methods: {
    ...mapActions([
      "incrementLettersCount",
      "addChainCount",
      "resetChainCount",
      "calculateAddScore",
      "incrementSuccessCount",
      "incrementMissCount",
      "nextWord",
      "addMissKey",
      "resetStore"
    ]),
    typeLetters({ key }) {
      let letters = this.word.letters;
      if (letters) {
        //表示された文字が入力した文字と正しいか判定
        let showLetter = letters[this.lettersCount].toUpperCase();
        if (showLetter == key.toUpperCase()) {
          this.incrementLettersCount();
          // this.calculateAddScore(this.chainCount);
          this.incrementSuccessCount();
          if (this.lettersCount === letters.length) {
            this.addChainCount(letters.length);
            this.calculateAddScore({
              chainCount: this.chainCount,
              length: letters.length
            });
            this.nextWord();
          }
        } else {
          if (key !== "Shift") {
            this.incrementMissCount();
            this.addMissKey(showLetter);
            this.resetChainCount();
          }
        }
      }
    },
    focusTypingArea() {
      let input = document.querySelector("input");
      if (input) {
        input.focus();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  caret-color: transparent;
  outline: none;
  color: gray;
  text-decoration-line: none;
  height: 20px;
  font-size: 20px;
  transform: scale(0.8);
  border: none;
  resize: none;
  line-height: 120%;
  opacity: 0;
}
</style>
