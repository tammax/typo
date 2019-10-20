<template lang="pug">
  div
    p.headname Miss Keys
    v-list-tile(v-for="(missKey, index) in missKeys" :key="index")
      v-layout(row wrap)
        v-flex(d-flex xs6 md6 align-self-center)
          p.name {{ missKey.key }}
        v-flex(d-flex xs6 md6 align-self-center)
          p.xxx
            span.value {{ missKey.count }}
            span.unit cnt
</template>

<script>
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
  font-weight: bold;
  font-size: 18px;
}

    .xxx {
      text-align: left;
    }

    .name {
      text-align: right;
      padding: 10px 20px;
      font-size: 20px;
    }

    .value {
      font-size: 24px;
      color: #1976d2;
    }

    .unit {
      padding: 10px;
      font-size: 15px;
    }
</style>
