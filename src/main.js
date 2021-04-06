import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import VueCarousel from  'vue-carousel';
import './assets/main_resets.css'
import 'vuesax/dist/vuesax.css' 
import router from './router/index'



Vue.use(Vuesax,{
  
});
Vue.use(VueCarousel);
Vue.use(VueRouter)


Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
