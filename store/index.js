import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is our first post!",
                thumbNail:
                  "https://d2ms8rpfqc4h24.cloudfront.net/5_industrial_metaverse_29ef98dfae.jpg",
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is our second post!",
                thumbNail:
                  "https://d2ms8rpfqc4h24.cloudfront.net/5_industrial_metaverse_29ef98dfae.jpg",
              },
            ]);
            resolve();
          }, 1500);
          // reject(new Error());
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};
export default createStore;
