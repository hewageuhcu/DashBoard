import {createRouter,createWebHistory} from "vue-router";
import MasterDashboard from '../Pages/Master/MasterDashboard.vue'
import MyHome from '../Pages/MyHome.vue'
import MyProfile from '../Pages/MyProfile.vue'

const routed=[
    {
        name:'MatserDashboard',
        path:'/',
        comonent:MasterDashboard,
        children:[
            {
                name:'MyHome',
                path:'/MyHome',
                comonent:MyHome
            },
            {
                name:'MyProfile',
                path:'/MyProfile',
                comonent:MyProfile
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