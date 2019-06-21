<template lang="pug">
  div
    h1 My Record
    TypoTotalRanking
    TypoTopButton
</template>

<script>
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoRecordView",
  components: {
    TypoTopButton
  }
};
</script>

<style scoped>
h1 {
  color: #ffffff;
}
</style>
