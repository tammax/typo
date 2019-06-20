<template lang="pug">
  div
    v-btn(flat to="/typing" large) Start
</template>

<script>
export default {
  name: "TypoStartButton"
};
</script>

<style lang="scss" scoped>
.v-btn {
  width: 90%;
}
</style>
