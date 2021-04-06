import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueRouter from 'vue-router'
import VueCarousel from  'vue-carousel';
import './assets/main_resets.css'
import 'vuesax/dist/vuesax.css' 
import router from './router/index'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

Vue.use(Vuesax);
Vue.use(VueCarousel);
Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
