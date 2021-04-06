import VueRouter from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import AllProducts from '../pages/AllProducts.vue'
import Diykits from '../pages/Diykits.vue'
import Groupbuys from '../pages/Groupbuys.vue'
import Switches from '../pages/Switches.vue'
import Keycaps from '../pages/Keycaps.vue'
import Cases from '../pages/Cases.vue'

const routes = [
{
    path: '/',
    component : MainLayout,
    redirect: '/home',
    children: [
           {
               path:'/home',
               component: Home,
               name:'home'
           },
           {
               path:'/all',
               component: AllProducts,
               name:'all'
           },
           {
               path:'/diy',
               component: Diykits,
               name:'diy'
           },
           {
               path:'/groupbuys',
               component: Groupbuys,
               name:'groupbuys'
           },
           {
               path:'/switches',
               component: Switches,
               name:'switches'
           },
           {
               path:'/cases',
               component: Cases,
               name:'cases'
           },
           {
               path:'/keycaps',
               component: Keycaps,
               name:'keycaps'
           },
    ]
}
]

const  router = new VueRouter({
    mode: 'history',
    routes
})

export default router;