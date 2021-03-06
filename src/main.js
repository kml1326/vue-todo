import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import VueI18n from "vue-i18n";
import messages from "../locales";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en-US",
  messages
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
