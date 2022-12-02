import Vue from 'vue'
import App from './App.vue'
import './index.css'
import TableMendingVue from "./index.js"
Vue.use(TableMendingVue)
new Vue({
  el: '#app',
  render: h => h(App),
  components: {App},
  template: '<App/>'
})