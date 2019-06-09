<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input type="tel" name="aaa" >
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    console.log(firebase);
  }
};
</script>

<style>
</style>
