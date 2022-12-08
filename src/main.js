import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import vSelect from "vue-select";

loadFonts();

const pinia = createPinia();
import "vue-select/dist/vue-select.css";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .component("small-select", vSelect)
  .mount("#app");
