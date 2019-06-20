<template lang="pug">
  div
    h1 Typo
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
}

</style>
