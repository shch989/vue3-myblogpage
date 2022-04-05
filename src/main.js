import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 전체 공통 css 디자인 
// import "./assets/css/commons.css"

// jquery 메뉴 부분 소스
// import "./util/commons.js"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
