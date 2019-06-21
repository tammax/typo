<template lang="pug">
  div
    v-list-tile-action
      span.headname Miss Keys
    v-list-tile(v-for="(missKey, index) in missKeys" :key="index")
      div.misskeys
        div.misskey {{ missKey.key }}
        p {{ missKey.count  }}
          span count
</template>

<script>
//import TypoRankingScore from "@/components/atoms/TypoRankingScore.vue";

export default {
  name: "TypoResultMissKeys",
  components: {},
  props: {
    missKeys: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.headname {
  padding: 0 10px;
  font-weight: bold;
  font-size: 15px;
  color: #ff6200;
}

.misskeys {
  width: 100%;
  p {
    text-align: right;
    font-size: 18px !important;
    span {
      font-size: 13px;
    }
  }
  .misskey {
    position: absolute;
    left: 0;
    display: inline-block;
    text-align: left;
    font-size: 18px;
    padding-left: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
