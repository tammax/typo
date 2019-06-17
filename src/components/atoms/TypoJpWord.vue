<template lang="pug">
  div
    p {{ word }}
</template>

<script>
export default {
  name: "TypoJpWord",
  props: {
    word: String
  }
};
</script>

<style lang="scss" scoped>
p {
  color: #cccccc;
}
</style>
