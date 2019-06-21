<template lang="pug">
  div
    v-list-tile-action
      span.headname Max Chain
    v-list-tile
      div.headline
        p {{ maxChainCount }}
          span chain
</template>

<script>
export default {
  name: "TypoResultMaxChainCount",
  props: {
    maxChainCount: Number
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
