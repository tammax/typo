<template lang="pug">
  v-list-tile-title.score {{ score }}
    span pt
</template>

<script>
export default {
  name: "TypoRankingScore",
  props: {
    score: Number
  }
};
</script>

<style lang="scss" scoped>
.score {
  font-size: 28px;
  text-align: center;

  span {
    font-size: 15px;
    padding: 10px;
  }
}
</style>
