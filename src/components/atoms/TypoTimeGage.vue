<template>
  <div>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="time"
        color="blue"
      >
        {{ time }}
      </v-progress-circular>
  </div>
</template>

<script>

export default {
  name: 'TypoTimeGage',
  data: () => {
    return {
      time: 30,
    }
  },
  mounted() {
    this.start();
  },
  beforeRouteLeave (route, redirect, next) {
    alert("beforeRouteEnter");
    // getPost(route.params.id, (err, post) => {
    //   next(vm => vm.setData(err, post))
    // })
    next();
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          clearInterval(this.timer);
          this.$router.push({ path: "result" });
        }
      }, 1000);
    }
  }
}

</script>