import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import api from './data'
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$api = api

const app = new Vue({
	...App
})
app.$mount()
