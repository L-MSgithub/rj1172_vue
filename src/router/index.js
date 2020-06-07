import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Index from "../components/Index";
import EquipmentAdd from "../components/EquipmentAdd";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/index',
    name:'index',
    component: Index
  },
  {
    path:'/equipmentadd',
    name:'equipmentadd',
    component: EquipmentAdd
  }
]

const router = new VueRouter({
  routes
})

export default router
