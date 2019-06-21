<template lang="pug">
  div
    v-list-tile-action
      span.headname Correct Rate
    v-list-tile
      div.headline
        p {{ correctRate }}
          span %
</template>

<script>
export default {
  name: "TypoResultCorrectRate",
  props: {
    correctRate: Number
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
