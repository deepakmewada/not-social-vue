import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import GAuth from "vue-google-oauth2";

Vue.config.productionTip = false;

const gauthOption = {
  clientId:
    "306467913704-t29amabreflrk5h20tuv1bu0g7lr5hsi.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};
Vue.use(GAuth, gauthOption);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
