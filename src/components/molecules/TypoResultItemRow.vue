<template lang="pug">
  div
    v-list-tile-action
      span.headname
        slot(name="name")
    v-list-tile
      div.headline
        p
          slot
          span
            slot(name="unit")
</template>

<script>
export default {
  name: "TypoResultItemRow"
};
</script>

<style lang="scss" scoped>
.headname {
  padding: 0 10px;
  font-weight: bold;
  font-size: 16px;
}

.headline {
  width: 100%;

  p {
    text-align: right;
    color: #1976d2;

    span {
      font-size: 15px;
    }
  }
}
</style>
