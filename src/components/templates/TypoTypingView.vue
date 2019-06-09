<template>
  <div>
    <TypoGameScreen />
    <TypeQuitButton />
  </div>
</template>

<script>

import TypoGameScreen from '@/components/organisms/TypoGameScreen.vue'
import TypeQuitButton from '@/components/atoms/TypoQuitButton.vue';

export default {
  name: 'TypoTypingView',
  components: {
    TypoGameScreen,
    TypeQuitButton,
  },
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
}
</script>

<style scoped>


</style>
