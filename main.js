import Vue from 'vue'
import App from './App'
import { http } from './util/luch-request/index'

Vue.config.productionTip = false
Vue.prototype.$http = http

App.mpType = 'app'

const app = new Vue({
	http,
    ...App
})
app.$mount()
