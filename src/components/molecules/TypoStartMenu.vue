<template lang="pug">
  div#menu
    TypoStartButton
    TypoRankingButton
    //- TypoRecordButton
    TypoTrainingButton
    TypoSettingButton
</template>

<script>
import TypoStartButton from "@/components/atoms/TypoStartButton.vue";
import TypoRankingButton from "@/components/atoms/TypoRankingButton.vue";
// import TypoRecordButton from "@/components/atoms/TypoRecordButton.vue";
import TypoTrainingButton from "@/components/atoms/TypoTrainingButton.vue";
import TypoSettingButton from "@/components/atoms/TypoSettingButton.vue";

export default {
  name: "TypoStartMenu",
  components: {
    TypoStartButton,
    TypoRankingButton,
    // TypoRecordButton,
    TypoTrainingButton,
    TypoSettingButton
  }
};
</script>

<style lang="scss" scoped>
#menu {
  border: 3px solid #cccccc;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
