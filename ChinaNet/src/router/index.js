import  { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import ApartmentAtt from '../views/Apartment_attendance.vue';
import CompanyAtt from '../views/Company_attendance.vue';
import MyAtt from '../views/My_attendance.vue';
import Permission from '../views/Permission.vue';
import System from '../views/System.vue';

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
    {
        path:'/mainView/Apartment',
        name:"Apartment",
        component: ApartmentAtt
    },
    {
        path:'/mainView/Company',
        name:"Company",
        component: CompanyAtt
    },
    {
        path:'/mainView/MyAtt',
        name:"MyAtt",
        component: MyAtt
    },
    {
        path:'/mainView/permission',
        name:"Permission",
        component: Permission
    },
    {
        path:'/mainView/system',
        name:"System",
        component: System
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;