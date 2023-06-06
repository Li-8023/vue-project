import  { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Main from '../views/Main.vue';
import ApartmentAtt from '../views/Apartment_attendance.vue';
import CompanyAtt from '../views/Company_attendance.vue';
import MyAtt from '../views/My_attendance.vue';
import Permission from '../views/Permission.vue';
import System from '../views/System.vue';
import BeiAn from '../views/My_attendance_pages/备案申请.vue';
import GongDan from '../views/My_attendance_pages/工单审批.vue';
import KaoQinQingDan from '../views/My_attendance_pages/考勤清单.vue';
import KaoQinTongJi from '../views/My_attendance_pages/考勤统计.vue';

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
    },
    {
        path:'/mainView/MyAtt/BeiAn',
        name:"BeiAn",
        component: BeiAn
    },
    {
        path:'/mainView/MyAtt/GongDan',
        name:"GongDan",
        component: GongDan
    },
    {
        path:'/mainView/MyAtt/KaoQinQingDan',
        name:"KaoQingDan",
        component: KaoQinQingDan
    },
    {
        path:'/mainView/MyAtt/KaoQinTongJi',
        name:"KaoQinTongJi",
        component: KaoQinTongJi
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;