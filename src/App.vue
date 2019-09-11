<template lang="pug">
  v-app(v-if="mode == 'light'")
    div#app
      router-view
  v-app(v-else dark)
    div#app
      router-view
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("setting", ["mode"])
  }
};
</script>

<style lang="scss">
// $darak-color: #111111 !important;
$darak-color: #ffffff !important;
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

.mode--light h1 {
  color: $light-color;
}

.theme--dark .v-card__text {
  color: $darak-color;
}
</style>
