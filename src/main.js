import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 전체 공통 css 디자인 
// import "./assets/css/commons.css"

// jquery 메뉴 부분 소스
// import "./util/commons.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
