<template lang="pug">
  div
    TypoGameScreen
    TypoTopButton
</template>

<script>
import TypoGameScreen from "@/components/organisms/TypoGameScreen.vue";
import TypoTopButton from "@/components/atoms/TypoTopButton.vue";

export default {
  name: "TypoTypingView",
  components: {
    TypoGameScreen,
    TypoTopButton
  }
  // beforeRouteLeave (route, redirect, next) {
  //   alert("beforeRouteEnter");
  //   // getPost(route.params.id, (err, post) => {
  //   //   next(vm => vm.setData(err, post))
  //   // })
  //   next();
  // },
  // watch: {
  //   // ルートが変更されたらこのメソッドを再び呼び出します
  //   '$route': 'fetchData'
  // },
  // methods: {
  //   fetchData() {
  //     alert("fetchData");
  //   }
  // }
};
</script>

<style scoped></style>
