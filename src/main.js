import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueProgressBar from "@aacassandra/vue3-progressbar";

const options = {
  color: "#1dbfb7",
  failedColor: "#874b4b",
  thickness: "8px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

createApp(App).use(VueProgressBar, options).use(router).mount("#app");
