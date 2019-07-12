<template lang="pug">
  v-container(fluid)
    v-layout(row wrap align-center)
      v-flex(xs6)
        v-subheader Theme
      v-flex(xs6)
        v-select(v-model="select" :items="items" item-text="state" item-value="code" label="Select" persistent-hint return-object single-line @change="setTheme(select)")
</template>

<script>

export default {
  name: "TypoSettingTheme",
  data() {
    return {
      select: { state: "dark", code: "dark" },
      items: [
        { state: "dark", code: "dark" },
        { state: "light", code: "light" }
      ]
    };
  },
  created() {
    // let code = localStorage.getItem("theme");
    // this.select.code = code;
    // this.select.state = code;
  },
  methods: {
    setTheme({ code }) {
      localStorage.setItem("theme", code);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-subheader {
  font-size: 18px;
}
</style>
