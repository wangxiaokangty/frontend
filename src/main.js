import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from "axios";
import './axios'


const app = createApp(App)


app.config.globalProperties.$axios = axios;

app
    .use(ElementPlus)
    .use(store)
    .use(router)
    .use(mavonEditor)
    .mount('#app')


