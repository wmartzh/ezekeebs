import VueRouter from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'

const routes = [
{
    path: '/',
    component : MainLayout,
    redirect: '/home',
    children: [
           {
               path:'/home',
               component: Home
           }
    ]
}
]

const  router = new VueRouter({
    routes
})

export default router;