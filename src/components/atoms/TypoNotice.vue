<template lang="pug">
  transition
    div.alert
      slot
</template>

<script>
export default {
  name: "TypoNotice"
  // props: {
  //   sentence: string
  // }
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
