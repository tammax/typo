import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import words from "@/assets/words.json";

// localStorage
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const ADD_SCORE = 100;
const WORD_TIME = 100;
//const PLAY_TIME = 30;

export default new Vuex.Store({
  state: {
    lettersCount: 0,
    chainCount: 0,
    score: 0,
    successCount: 0,
    missCount: 0,
    maxChainCount: 0,
    missKeys: [],
    wordTime: WORD_TIME,
    wordTimer: null,
    word: { letters: [], jp: "" },
    theme: "dark"
  },
  getters: {
    lettersCount(state) {
      return state.lettersCount;
    },
    chainCount(state) {
      return state.chainCount;
    },
    score(state) {
      return state.score;
    },
    successCount(state) {
      return state.successCount;
    },
    missCount(state) {
      return state.missCount;
    },
    missKeys(state) {
      return state.missKeys;
    },
    // playTime(state) {
    //   return state.playTime;
    // },
    // palyTimer(state) {
    //   return state.palyTimer;
    // },
    wordTime(state) {
      return state.wordTime;
    },
    wordTimer(state) {
      return state.wordTimer;
    },
    word(state) {
      return state.word;
    },
    theme(state) {
      return state.theme;
    }
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
    resetSuccessCount(state) {
      state.successCount = 0;
    },
    resetMissCount(state) {
      state.missCount = 0;
    },
    resetLettersCount(state) {
      state.lettersCount = 0;
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
    setWordTimer(state, payload) {
      state.wordTimer = payload;
    },
    resetWordTimer(state) {
      clearInterval(state.wordTimer);
      state.wordTimer = null;
      state.wordTime = WORD_TIME;
    },
    // subtractPlayTime(state, payload) {
    //   state.playTime -= payload;
    // },
    // setPlayTimer(state, payload) {
    //   state.playTimer = payload;
    // },
    // resetPlayTimer(state) {
    //   clearInterval(state.playTimer);
    //   state.playTimer = null;
    //   state.playTime = PLAY_TIME;
    // },
    setWord(state, payload) {
      state.word = payload;
    },
    nextWord(state) {
      //Deepコピーした方がいいかも
      state.word = _.sample(words);
      state.lettersCount = 0;
      state.wordTime = WORD_TIME;
    },
    addMissKey(state, payload) {
      let index = _.findIndex(state.missKeys, ["key", payload]);
      if (state.missKeys[index]) {
        state.missKeys[index].count++;
      } else {
        state.missKeys.push({ key: payload, count: 1 });
      }
    },
    resetStore(state) {
      state.lettersCount = 0;
      state.chainCount = 0;
      state.score = 0;
      state.successCount = 0;
      state.missCount = 0;
      state.maxChainCount = 0;
      state.missKeys = [];
      // state.words = words
      state.word = { letters: [], jp: "" };
      // state.wordTime = WORD_TIME;
      // state.wordTimer = null;
      // wordTime: WORD_TIME,
      // wordTimer: null,
    },
    setTheme(state, payload) {
      // state.theme = payload;
      localStorage.theme = payload;
    }
  },
  actions: {
    addUpdate({ commit }, message) {
      commit("setMessage", { message });
    },
    incrementLettersCount({ commit }) {
      commit("incrementLettersCount");
    },
    incrementSuccessCount({ commit }) {
      commit("incrementSuccessCount");
    },
    incrementMissCount({ commit }) {
      commit("incrementMissCount");
    },
    resetSuccessCount({ commit }) {
      commit("resetSuccessCount");
    },
    resetMissCount({ commit }) {
      commit("resetMissCount");
    },
    resetLettersCount({ commit }) {
      commit("resetLettersCount");
    },
    addChainCount({ commit }, addCount) {
      commit("updateChainCount", addCount);
    },
    resetChainCount({ commit }) {
      commit("resetChainCount");
    },
    calculateAddScore({ commit }, { chainCount, length }) {
      let addScore = ADD_SCORE * length + length * 30;
      if (chainCount > 100) {
        addScore = addScore * 1.5;
      } else if (chainCount > 50) {
        addScore = addScore * 1.3;
      } else if (chainCount > 30) {
        addScore = addScore * 1.2;
      } else if (chainCount > 10) {
        addScore = addScore * 1.1;
      }
      commit("addScore", addScore);
    },
    subtractWordTime({ commit }, subtractTime) {
      commit("subtractWordTime", subtractTime);
    },
    setWordTimer({ commit }, timer) {
      commit("setWordTimer", timer);
    },
    resetWordTimer({ commit }) {
      commit("resetWordTimer");
    },
    setWord({ commit }, word) {
      commit("setWord", word);
    },
    nextWord({ commit }) {
      commit("nextWord");
    },
    // subtractPlayTime({ commit }, subtractTime) {
    //   commit("subtractPlayTime", subtractTime);
    // },
    // setPlayTimer({ commit }, timer) {
    //   commit("setPlayTimer", timer);
    // },
    // resetPlayTimer({ commit }) {
    //   commit("resetPlayTimer");
    // },
    addMissKey({ commit }, key) {
      commit("addMissKey", key);
    },
    resetStore({ commit }) {
      commit("resetStore");
    },
    setTheme({ commit }, theme) {
      commit("setTheme", theme);
    }
  }
});
