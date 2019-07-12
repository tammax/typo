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
import { Howl, Howler } from "howler";
import { mapState, mapActions } from "vuex";

export default {
  name: "TypoTypingWord",
  data: () => {
    return {
      isMobile: isMobile.any,
      sounds: [
        "http://localhost:8080/key01.mp3",
        "http://localhost:8080/key02.mp3",
      ]
    };
  },
  computed: {
    ...mapState(["word", "lettersCount", "chainCount"])
  },
  components: {
    TypoEnWord,
    TypoJpWord
  },
  created() {
    // storeデータのリセット
    this.resetStore();
  },
  mounted() {
    window.addEventListener("keyup", this.typeLetters, true);
//    window.addEventListener("keyup", this.beatKeyboardSound, true);
    window.addEventListener("click", this.focusTypingArea, true);
    window.addEventListener("touchstart", this.focusTypingArea, true);
    this.focusTypingArea();
    this.nextWord();
  },
  destroyed() {
    console.log("destroyed");
    window.removeEventListener("keyup", this.typeLetters, true);
//    window.removeEventListener("keyup", this.beatKeyboardSound, true);
    window.removeEventListener("click", this.focusTypingArea, true);
    window.removeEventListener("touchstart", this.focusTypingArea, true);
  },
  methods: {
    hoge() {
      const sound1 = new Howl({
        src: [
          "http://localhost:8080/key01.mp3",
        ]
      });

      sound1.play();
      // Change global volume.
      Howler.volume(999);
      console.log("hogehohgoe1");
    },
    hoge2() {
      const sound2 = new Howl({
        src: [
          "http://localhost:8080/key02.mp3"
        ]
      });

      sound2.play();

      // Change global volume.
      Howler.volume(999);
      console.log("hogehohgoe2");
    },
    hoge3() {
      const sound3 = new Howl({
        src: [
          "http://localhost:8080/key05.mp3"
        ]
      });

      sound3.play();

      // Change global volume.
      Howler.volume(999);
      console.log("hogehohgoe3");
    },
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
      console.log(letters);
      if (letters) {
        //表示された文字が入力した文字と正しいか判定
        let showLetter = letters[this.lettersCount].toUpperCase();
        if (showLetter == key.toUpperCase()) {
          this.hoge();
          this.incrementLettersCount();
          // this.calculateAddScore(this.chainCount);
          this.incrementSuccessCount();
          if (this.lettersCount === letters.length) {
            this.hoge2();
            this.addChainCount(letters.length);
            this.calculateAddScore({
              chainCount: this.chainCount,
              length: letters.length
            });
            this.nextWord();
          }
        } else {
          if (key !== "Shift") {
            this.hoge3();
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
