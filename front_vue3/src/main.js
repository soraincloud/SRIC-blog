import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import i18n from './language'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts';
import { visitPage } from './axios/api/visitApi'

//md编辑器v-md-editor引入
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

axios.defaults.baseURL = 'http://localhost:8443/api'

import hljs from 'highlight.js'; //md编辑器的样式引入
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$t = i18n.global.t
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.use(VMdEditor)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) 
{
  app.component(key, component)
}

app.mount('#app')

visitPage({ page: "main" })