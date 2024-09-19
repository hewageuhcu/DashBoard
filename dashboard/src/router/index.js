import {createRouter,createWebHistory} from "vue-router";
import MasterDashboard from '../Pages/Master/MasterDashboard.vue'
import home from '../Pages/home.vue'
import profile from '../Pages/Profile.vue'

const routed=[
    {
        name:'MatserDashboard',
        path:'/',
        comonent:MasterDashboard
    },
    {
        name:'home',
        path:'/home',
        comonent:home
    },
    {
        name:'profile',
        path:'/profile',
        comonent:profile
    },
];
const router = Router();
export default router;
function Router(){
    const router = new createRouter({
        history:createWebHistory(),
        routes,
    });
    return router;
}