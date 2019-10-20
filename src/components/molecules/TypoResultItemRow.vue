<template lang="pug">
  div
    p.headname
      slot(name="name")
    v-list-tile
      div.headline
        p
          span.value
            slot(name="value")
          span.unit
            slot(name="unit")
</template>

<script>
export default {
  name: "TypoResultItemRow"
};
</script>

<style lang="scss" scoped>
.headname {
  font-weight: bold;
  font-size: 18px;
}
.headline {
  width: 100%;
  p {
    padding: 10px;
    .value {
      color: #1976d2;
      padding: 10px;
    }
    .unit {
      font-size: 15px;
    }
  }
}
</style>
