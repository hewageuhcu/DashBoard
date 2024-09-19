import {createRouter,createWebHistory} from "vue-router";
import dashboard from '../Pages/Master/dashboard.vue'
import home from '../Pages/home.vue'
import profile from '../Pages/Profile.vue'

const routed=[
    {
        name:'Dashboard',
        path:'/',
        comonent:dashboard
    }
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