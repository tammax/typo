<template lang="pug">
  v-list-tile-title.labels
    span.label
      slot(name="label")
    span.value
      slot.value
    span.unit
      slot(name="unit")
</template>

<script>
export default {
  name: "TypoRankingItemRow"
};
</script>

<style lang="scss" scoped>
.labels {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  padding: 5px;
  height: 28px;

  span {
    width: 33%;
  }

  .label {
    font-size: 10px;
    text-align: left;
  }

  .value {
    font-size: 20px;
    text-align: center;
  }

  .unit {
    font-size: 10px;
    text-align: right;
  }
}
</style>
