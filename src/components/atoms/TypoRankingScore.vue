<template lang="pug">
  v-list-tile-title.score
    span Score
    | {{ score }}
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
  overflow: visible;
  position: relative;
  height: 100%;
  line-height: 26px;
  font-size: 26px;
  padding: 8px 0;
  display: block;
  text-align: center;

  span {
    position: absolute;
    font-size: 15px;
  }

  span:first-child {
    left: 30px;
  }

  span:last-child {
    right: 0;
  }
}
</style>
