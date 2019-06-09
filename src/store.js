import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";

Vue.use(Vuex);

const ADD_SCORE = 100;

export default new Vuex.Store({
  state: {
    lettersCount: 0,
    chainCount: 0,
    score: 0,
    successCount: 0,
    missCount: 0,
    maxChainCount: 0,
    missKeys: [],
    wordTime: 100,
  },
  getters: {
    lettersCount(state) { return state.lettersCount },
    chainCount(state) {return state.chainCount },
    score(state) {return state.score },
    successCount(state) {return state.successCount },
    missCount(state) {return state.missCount },
    missKeys(state) {return state.missKeys },
    wordTime(state) {return state.wordTime},
  },
  mutations: {
    incrementLettersCount(state) {
      state.lettersCount++;
    },
    incrementSuccessCount(state) {
      state.successCount++;
    },
    incrementMissCount(state) {
      state.missCount++;
    },
    resetLettersCount(state) {
      state.lettersCount = 0
    },
    updateChainCount(state, payload) {
      state.chainCount += payload;
      if (state.chainCount > state.maxChainCount) {
        state.maxChainCount = state.chainCount;
      }
    },
    resetChainCount(state) {
      state.chainCount = 0;
    },
    addScore(state, payload) {
      state.score += payload;
    },
    subtractWordTime(state, payload) {
      state.wordTime -= payload;
    },
    nextWord(state) {

    },
  },
  actions: {
    addUpdate({ commit }, message) {
      commit('setMessage', {message});
    },
    incrementLettersCount({commit}) {
      commit('incrementLettersCount');
    },
    incrementSuccessCount({commit}) {
      commit('incrementSuccessCount');
    },
    incrementMissCount({commit}) {
      commit('incrementMissCount');
    },
    resetLettersCount({commit}) {
      commit('resetLettersCount');
    },
    addChainCount({ commit }, addCount) {
      commit('updateChainCount', addCount);
    },
    resetChainCount({commit}) {
      commit('resetChainCount');
    },
    calculateAddScore({ commit }, chainCount) {
      let addScore = ADD_SCORE;
      if (chainCount > 100) {
        addScore = addScore * 1.5;
      } else if (chainCount > 50) {
        addScore = addScore * 1.2;
      }
      commit('addScore', addScore);
    },
    subtractWordTime( {commit},  subtractTime) {
      commit('subtractWordTime', subtractTime);
    },
    nextWord( {commit} ) {
      commit("nextWord");
    }
  }
});
