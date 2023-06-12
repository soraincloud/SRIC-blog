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

axios.defaults.baseURL = 'http://localhost:8443/api'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
