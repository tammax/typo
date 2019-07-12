import Vue from "vue";
import Router from "vue-router";

// @ is an alias to /src
import TypoStartView from "@/components/templates/TypoStartView.vue";
import TypoTypingView from "@/components/templates/TypoTypingView.vue";
import TypoRankingView from "@/components/templates/TypoRankingView.vue";
import TypoRecordView from "@/components/templates/TypoRecordView.vue";
import TypoResutlView from "@/components/templates/TypoResutlView.vue";
import TypoSettingView from "@/components/templates/TypoSettingView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: TypoStartView
    },
    {
      path: "/typing",
      component: TypoTypingView
    },
    {
      path: "/ranking",
      component: TypoRankingView
    },
    {
      path: "/record",
      component: TypoRecordView
    },
    {
      path: "/result",
      component: TypoResutlView
    },
    {
      path: "/setting",
      component: TypoSettingView
    }
  ]
});
