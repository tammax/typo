export default {
  namespaced: true,
  state: {
    mode: "dark",
    soundFlg: true
  },
  getters: {
    mode(state) {
      return state.mode;
    },
    soundFlg(state) {
      return state.soundFlg;
    }
  },
  mutations: {
    setMode(state, payload) {
      state.mode = payload;
    },
    setSoundFlg(state, payload) {
      state.soundFlg = payload;
    }
  },
  actions: {
    setMode({ commit }, mode) {
      commit("setMode", mode);
    },
    setSoundFlg({ commit }, soundFlg) {
      commit("setSoundFlg", soundFlg);
    }
  }
};
