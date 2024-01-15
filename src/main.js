import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'





createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .use(mavonEditor)
    .mount('#app')

