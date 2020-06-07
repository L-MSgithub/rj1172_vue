import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Index from "../components/Index";
import EquipmentAdd from "../components/EquipmentAdd";
import EquipmentRent from "../components/EquipmentRent";
import EquipmentQuery from "../components/EquipmentQuery";
import EquipmentDelete from "../components/EquipmentDelete";
import EquipmentFix from "../components/EquipmentFix";
import EquipmentReturn from "../components/EquipmentReturn";
import EquipmentStandard from "../components/EquipmentStandard";

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
        component: EquipmentFix
      },
      {
        path:'/equipmentdelete',
        name:'报废删除',
        component: EquipmentDelete
      },
      {
        path:'/equipmentquery',
        name:'查询',
        component: EquipmentQuery
      },
      {
        path:'/equipmentrent',
        name:'租用',
        component: EquipmentRent
      },
      {
        path:'/equipmentreturn',
        name:'回收',
        component: EquipmentReturn
      },
      {
        path:'/equipmentstandard',
        name:'租用消费标准',
        component: EquipmentStandard
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
