export default {
  namespaced: true,
  state: {
    mode: "dark"
  },
  getters: {
    mode(state) {
      console.log(state.mode);
      return state.mode;
    }
  },
  mutations: {
    setMode(state, payload) {
      state.mode = payload;
    }
  },
  actions: {
    setMode({ commit }, mode) {
      commit("setMode", mode);
    }
  }
};
