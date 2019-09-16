<template lang="pug">
  v-list-tile-title.chain
    span Max Chain
    | {{ maxChain }}
    span chain
</template>

<script>
export default {
  name: "TypoRankingMaxChain",
  props: {
    maxChain: Number
  }
};
</script>

<style lang="scss" scoped>
.chain {
  overflow: visible;
  position: relative;
  width: 100%;
  font-size: 20px;
  line-height: 20px;
  padding: 5px 0px;
  display: block;
  text-align: center;

  span {
    position: absolute;
    font-size: 10px;
  }

  span:first-child {
    left: 30px;
  }

  span:last-child {
    right: 0;
  }
}
</style>
