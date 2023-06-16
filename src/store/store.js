import Vue from 'vue';
import Vuex from 'vuex';
import algoliasearch from 'algoliasearch/lite';

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    posts: [],
    searchVal: "",
    selectedPost: null,
    nbPages: 0,
    hitsPerPage: 10,
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts;
    },
    SET_SEARCH_VAL: (state, value) => {
      state.searchVal = value;
    },
    SET_SELECTED_POST: (state, value) => {
      state.selectedPost = value;
    },
    SET_NBPAGES: (state, value) => {
      state.nbPages = value;
    },
  },
  actions: {
    FETCH_POSTS_FROM_API({ commit, state }, currentPage = 1) {
      const algolia = algoliasearch(
        "OFCNCOG2CU",
        "f54e21fa3a2a0160595bb058179bfb1e",
        {
          protocol: "https:",
        }
      );
      const index = algolia.initIndex("npm-search");
      index
        .search(state.searchVal, {
          hitsPerPage: state.hitsPerPage,
          page: currentPage,
        })
        .then(({ hits, nbPages }) => {
          commit("SET_POSTS", hits);
          commit("SET_NBPAGES", nbPages);
        });
    },
  },
  getters: {
    POSTS(state) {
      return state.posts;
    },
    SEARCH_VAL(state) {
      return state.searchVal;
    },
    SELECTED_POST(state) {
      return state.selectedPost;
    },
    NBPAGES(state) {
      return state.nbPages;
    },
  },
});

export default store;
