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
      isMobile: isMobile.any
    };
  },
  computed: {
    ...mapState("play", ["word", "lettersCount", "chainCount"]),
    ...mapState("setting", ["soundFlg"])
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
    window.removeEventListener("keyup", this.typeLetters, true);
    //    window.removeEventListener("keyup", this.beatKeyboardSound, true);
    window.removeEventListener("click", this.focusTypingArea, true);
    window.removeEventListener("touchstart", this.focusTypingArea, true);
  },
  methods: {
    beatSuccess() {
      const sound = new Howl({
        src: [
          "https://firebasestorage.googleapis.com/v0/b/typo-60d72.appspot.com/o/sound%2Fkey0101.mp3?alt=media&token=1a4d6b8f-f394-46d2-8036-6eea21b5a36d"
        ]
      });

      sound.play();
      // Change global volume.
      Howler.volume(999);
    },
    beatFinish() {
      const sound = new Howl({
        src: [
          "https://firebasestorage.googleapis.com/v0/b/typo-60d72.appspot.com/o/sound%2Fkey0102.mp3?alt=media&token=1ef74912-0990-49e1-b052-74ea1442a37c"
        ]
      });

      sound.play();

      // Change global volume.
      Howler.volume(999);
    },
    beatMiss() {
      const sound = new Howl({
        src: [
          "https://firebasestorage.googleapis.com/v0/b/typo-60d72.appspot.com/o/sound%2Fkey0103.mp3?alt=media&token=657e7d1d-c89d-49a1-80ab-c38687a8e241"
        ]
      });

      sound.play();
      // Change global volume.
      Howler.volume(999);
    },
    ...mapActions("play", [
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
      // console.log(letters);
      if (letters) {
        //表示された文字が入力した文字と正しいか判定
        let showLetter = letters[this.lettersCount].toUpperCase();
        if (showLetter == key.toUpperCase()) {
          if (this.soundFlg) {
            this.beatSuccess();
          }
          this.incrementLettersCount();
          // this.calculateAddScore(this.chainCount);
          this.incrementSuccessCount();
          if (this.lettersCount === letters.length) {
            if (this.soundFlg) {
              this.beatFinish();
            }
            this.addChainCount(letters.length);
            this.calculateAddScore({
              chainCount: this.chainCount,
              length: letters.length
            });
            this.nextWord();
          }
        } else {
          if (key !== "Shift") {
            if (this.soundFlg) {
              this.beatMiss();
            }
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
