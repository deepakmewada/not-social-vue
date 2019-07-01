import Vue from "vue";
import Vuex from "vuex";
import user from "./user"
import loader from "./loader"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    loader
  }
});
