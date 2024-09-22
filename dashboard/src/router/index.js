import {createRouter,createWebHistory} from "vue-router";
import MasterDashboard from '../Pages/Master/MasterDashboard.vue'
import home from '../Pages/home.vue'
import Profile from '../Pages/Profile.vue'

const routed=[
    {
        name:'MatserDashboard',
        path:'/',
        comonent:MasterDashboard,
        children:[
            {
                name:'home',
                path:'/home',
                comonent:home
            },
            {
                name:'Profile',
                path:'/Profile',
                comonent:Profile
            },
        ]
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