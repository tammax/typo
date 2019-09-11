import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import play from "@/store/modules/play";
import setting from "@/store/modules/setting";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    play,
    setting
  },
  plugins: [createPersistedState({ paths: ["setting"] })]
});
