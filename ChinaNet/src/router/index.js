import  { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
const routes = [
    {
        path: '/',
        name:'home',
        component: Home
    },
    {
        path:'/mainView',
        name:'main',
        component: Main
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;