import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入elementui
import ElementUI from 'element-ui'  //引入elementui
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//将 axios 绑定到 vue 原型上
import axios from 'axios'
import VueAxios from 'vue-axios'
// VueAxios 与 axios 的位置不能交换，否则出现 TypeError: Cannot read property 'protocol' of undefined
Vue.use( VueAxios , axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
