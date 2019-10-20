<template lang="pug">
  transition
    span.alert
      slot
</template>

<script>
export default {
  name: "TypoNotice"
};
</script>

<style lang="scss" scoped>
// .alert {
//   font-size: 20px;
//   font-weight: bold;
// }
</style>
