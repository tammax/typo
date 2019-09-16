<template lang="pug">
  div
    v-list-tile-action
      span.headname Score
    v-list-tile
      div.headline
        p {{ score | commaSeparate }}
          span pt
</template>

<script>
export default {
  name: "TypoResultTotalRank",
  props: {
    score: Number
  },
  filters: {
    commaSeparate(num) {
      return num.toLocaleString();
    }
  }
};
</script>

<style lang="scss" scoped>
.headname {
  padding: 0 10px;
  font-weight: bold;
  font-size: 15px;
  color: #ff6200;
}

.headline {
  width: 100%;

  p {
    text-align: right;

    span {
      font-size: 15px;
    }
  }
}
</style>
