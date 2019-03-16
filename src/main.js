import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Chart from 'vue2-frappe'

Vue.use(VueAxios, axios, Chart)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
