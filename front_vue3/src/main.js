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
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.use(VMdEditor)

app.mount('#app')
