// import LoadScript from 'vue-plugin-load-script';
import { createApp } from 'vue'
import LoadScript from "vue-plugin-load-script";
import App from './App.vue'
import router from './router'
import store from './store'

// console.log(LoadScript)
// createApp(App).use(LoadScript);

// import { createApp } from "vue";
// import LoadScript from "vue-plugin-load-script";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(LoadScript);

app.mount("#app");

// const app = createApp(App).use(store).use(router).use(LoadScript).mount('#app')

// createApp(App).use(LoadScript)
// Vue.loadScript("../assets/plugins/jquery/jquery-3.3.1.min.js")
