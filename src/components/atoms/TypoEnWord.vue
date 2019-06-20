<template lang="pug">
  div#word
    span.letter(
      v-for="(letter, index) in letters"
      :key="index"
      :class="{ current: isCurrent(index), inputed: isInputed(index), space: isSpace(letter) }"
      class="letter"
    ) {{ letter | replaceSpace }}
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TypoEnWord",
  props: {
    letters: Array
  },
  computed: {
    ...mapState(["lettersCount"])
  },
  methods: {
    isCurrent(index) {
      return this.lettersCount === index;
    },
    isInputed(index) {
      return this.lettersCount > index;
    },
    isSpace(letter) {
      return letter === " ";
    }
  },
  filters: {
    replaceSpace(letter) {
      if (letter === " ") {
        letter = "␣";
      }
      return letter;
    }
  }
};
</script>

<style scoped lang="scss">
#word {
  font-size: 0px;
}

.letter {
  color: #666666;
  font-size: 50px;
  letter-spacing: 5px;
  display: inline-block;
}

.space {
  font-size: 20px;
}

.inputed {
  color: #cccccc;
}

.current {
  color: #ff6200;
}
</style>
