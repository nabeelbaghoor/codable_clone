// import { createApp, use } from "vue";
import * as Vue from "vue";
import App from "./App.vue";
import "./Mystyle.css";
import "bootstrap";

import router from "./router";

// import vueScript2 from "vue-script2";
// import Ads from "vue-google-adsense";
// require("vue-script2");
// Ads.Adsense;
// use(Ads.Adsense);

Vue.createApp(App).use(router).mount("#app");
