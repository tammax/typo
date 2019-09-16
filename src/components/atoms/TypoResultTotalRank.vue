<template lang="pug">
  transition
    div.alert(v-if="rank > 0") Total Rank {{ rank }}
</template>

<script>
export default {
  name: "TypoResultTotalRank",
  props: {
    rank: Number
  }
};
</script>

<style lang="scss" scoped>
.alert {
  font-size: 22px;
  padding: 10px 0 35px 0;
  color: #ff6200;
  font-weight: bold;
}
</style>
