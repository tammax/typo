<template lang="pug">
  div#menu
    div
      v-btn(flat to="/typing" large block) Start
      v-btn(flat to="/ranking" large block) Ranking
      v-btn(flat large block disabled) Training
      v-btn(flat to="/setting" large block) Setting
</template>

<script>
export default {
  name: "TypoStartMenu"
};
</script>

<style lang="scss" scoped>
#menu {
  border: 3px solid #cccccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  // margin-top: 50px;

  div {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
