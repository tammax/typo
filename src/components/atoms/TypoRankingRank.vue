<template lang="pug">
  v-list-tile-action.rank
    v-icon.crown(v-if="index === 0" large color="#DBB400") fa-crown
    v-icon.crown(v-else-if="index === 1" large color="#C9CACA") fa-crown
    v-icon.crown(v-else-if="index === 2" large color="#C47022") fa-crown
    v-list-tile-action-text.number {{ index + 1 }}
</template>

<script>
export default {
  name: "TypoRankingRank",
  props: {
    index: Number
  }
};
</script>

<style lang="scss" scoped>
.rank {
  position: relative;

  .crown {
    vertical-align: sub;
    margin: auto;
  }

  .number {
    position: absolute;
    left: 25%;
    font-size: 45px;
    font-weight: bold;
    z-index: 1;
    margin: 0 auto;
    color: #ffffff;
    text-shadow: 2px 2px 1px #2c3e50, -2px 2px 1px #2c3e50, 2px -2px 1px #2c3e50,
      -2px -2px 1px #2c3e50;
  }
}
</style>
