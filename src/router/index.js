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
    component: Index,
    children:[
      {
        path:'/equipmentadd',
        name:'购置新增',
        component: EquipmentAdd
      },
      {
        path:'/equipmentfix',
        name:'维护保修',
        component: EquipmentAdd
      },
      {
        path:'/equipmentdelete',
        name:'报废删除',
        component: EquipmentAdd
      },
      {
        path:'/equipmentquery',
        name:'查询',
        component: EquipmentAdd
      },
      {
        path:'/equipmentrent',
        name:'租用',
        component: EquipmentAdd
      },
      {
        path:'/equipmentreturn',
        name:'回收',
        component: EquipmentAdd
      },
      {
        path:'/equipmentstandard',
        name:'租用消费标准',
        component: EquipmentAdd
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
