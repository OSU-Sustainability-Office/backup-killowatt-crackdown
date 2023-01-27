import { createApp } from "vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from "./App.vue";
const app = createApp(App);

app.use(ElementPlus);

// Should probably offload this to a .env
app.config.debug = false;
app.config.devtools = false;
app.config.lang = "en";

app.mount("#app");
