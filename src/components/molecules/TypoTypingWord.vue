<template>
  <div>
    <TypoEnWord :letters="word.letters"/>
    <TypoJpWord :word="word.jp"/>
    <input v-if="isMobile" type="password" autofocus spellcheck="false">
  </div>
</template>

<script>
import _ from "lodash";
import TypoEnWord from "@/components/atoms/TypoEnWord.vue";
import TypoJpWord from "@/components/atoms/TypoJpWord.vue";
import isMobile from "ismobilejs";

import { mapState, mapActions } from 'vuex';
import words from "@/assets/words.json";

export default {
  name: "TypoTypingWord",
  data: () => {
    return {
      words: [],
      word: { letters: [], jp: "" },
      isMobile: isMobile.any,
    };
  },
  computed: {
    ...mapState([
      'lettersCount',
      'chainCount',
    ])
  },
  components: {
    TypoEnWord,
    TypoJpWord
  },
  mounted() {
    window.addEventListener("keyup", this.typeLetters, true);
    window.addEventListener("click", this.focusTypingArea, true);
    window.addEventListener("touchstart", this.focusTypingArea, true);
    this.focusTypingArea();
    this.words = words;
    this.word = _.sample(this.words);
  },
  methods: {
    ...mapActions([
      'incrementLettersCount',
      'resetLettersCount',
      'addChainCount',
      'resetChainCount',
      'calculateAddScore',
      'incrementSuccessCount',
      'incrementMissCount',
    ]),
    typeLetters({ key }) {
      let letters = this.word.letters;
      if (letters) {
        if (letters[this.lettersCount].toUpperCase() == key.toUpperCase()) {
          this.incrementLettersCount();
          this.calculateAddScore(this.chainCount);
          this.incrementSuccessCount();
          if (this.lettersCount == letters.length) {
            this.word = _.sample(this.words);
            this.addChainCount(letters.length);
            this.resetLettersCount();
          }
        } else {
          if (key !== "Shift") {
            this.incrementMissCount();
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

<style scoped>
input {
  caret-color: transparent;
  outline: none;
  /*
  color: transparent;
  */
  color: gray;
  text-decoration-line: none;
  /*
  font-size: 16px;
  */
  height: 20px;
  font-size: 20px;
  transform: scale(0.8);
  border: none;
  resize: none;
  line-height: 120%;
  opacity: 0;
}
</style>
