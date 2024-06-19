import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';// 引入Element Plus
//import jQuery from 'jquery';
import 'element-plus/dist/index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(router);

app.mount('#app');
