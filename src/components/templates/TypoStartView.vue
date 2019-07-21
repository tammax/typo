<template lang="pug">
  div
    h1 Typo
    section
      TypoStartMenu
</template>

<script>
import TypoStartMenu from "@/components/molecules/TypoStartMenu.vue";

export default {
  name: "TypoStartView",
  components: {
    TypoStartMenu
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 100px;
  color: #cccccc;
  // text-shadow: 5px 5px 1px #999999;
  text-shadow: 5px 1px 1px #999999;
}

section {
  margin-top: 50px;
}
</style>
