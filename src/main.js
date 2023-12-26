import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
let app;
onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App);
    app.use(router);
    app.mount("#app");
  }
});
