<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Sound
      v-flex(xs6)
        //- v-switch(v-model="switch1" :label="`Switch 1: ${switch1.toString()}`")
        v-switch(v-model="switch1")
</template>

<script>
//import { mapState } from "vuex";

export default {
  name: "TypoSettingSound",
  data() {
    return {
      switch1: true
    };
  }
};
</script>

<style lang="scss" scoped>
.v-subheader {
  font-size: 18px;
}
</style>
