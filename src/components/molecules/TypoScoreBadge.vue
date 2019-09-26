<template lang="pug">
  v-card
    v-card-text
      div#row
        div.heading
          slot(name="label")
        div
        div.value {{ count }}
        TypoBadge(:count="count")
</template>

<script>
import TypoBadge from "@/components/atoms/TypoBadge.vue";

export default {
  name: "TypoScoreBadge",
  components: {
    TypoBadge
  },
  props: {
    count: Number
  }
};
</script>

<style lang="scss" scoped>
#row {
  position: relative;

  .heading {
    font-size: 12px;
    position: absolute;
    top: -10px;
  }

  .value {
    font-size: 20px;
    margin: 0;
  }
}
</style>
