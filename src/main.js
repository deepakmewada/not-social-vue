import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import GAuth from "vue-google-oauth2";

Vue.config.productionTip = false;

const gauthOption = {
  clientId:
    "159241832920-fsmcs20gjt038patdsah8tqh2e59ni01.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};
Vue.use(GAuth, gauthOption);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
