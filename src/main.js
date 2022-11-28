import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import ElementPlus from 'element-plus' // 引入element-plus
import 'element-plus/theme-chalk/index.css' // 引入element-plus的样式
const Vue = createApp(App)
Vue.use(ElementPlus)
Vue.mount('#app')
