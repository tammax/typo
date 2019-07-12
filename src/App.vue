<template lang="pug">
  v-app(v-if="theme == 'light'")
    div#app
      router-view
      button(@click="hoge") HOGEBUTTON LIGHT
      div {{ theme }}
  v-app(v-else dark)
    div#app
      router-view
      button(@click="hoge") HOGEBUTTON DARK
      div {{ theme }}
</template>

<script>
export default {
  data() {
    return {
      theme: "dark"
    };
  },
  created() {
    if (!localStorage.theme) {
      localStorage.theme = "darak";
    }
    this.theme = localStorage.theme;
  },
  methods: {
    hoge() {
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        this.theme = "dark";
        localStorage.theme = "ligth";
      } else {
        this.theme = "light";
        localStorage.theme = "dark";
      }
    },
    setTheme(theme) {
      this.theme = theme;
      localStorage.theme = theme;
    }
  }
};
</script>

<style lang="scss">
$darak-color: #111111 !important;
$light-color: #333333 !important;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.theme--light h1 {
  color: $light-color;
}
</style>
