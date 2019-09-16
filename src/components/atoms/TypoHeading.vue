<template lang="pug">
  v-card(flat)
    h1
      slot.headline
</template>

<style lang="scss" scoped>
.v-card {
  background-color: transparent;
  h1 {
    padding: 10px;
  }
}
</style>
