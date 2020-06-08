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
import PlaceAdd from "../components/PlaceAdd";
import PlaceDelete from "../components/PlaceDelete";
import PlaceOrder from "../components/PlaceOrder";
import PlaceOrderMsg from "../components/PlaceOrderMsg";
import QueryWeekMsg from "../components/QueryWeekMsg";
import PlaceNews from "../components/PlaceNews";

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
    ],
  },
  {
    path:'/index',
    name:'index',
    component: Index,
    children:[
      {
        path:'/placeadd',
        name:'新增场地',
        component: PlaceAdd
      },
      {
        path:'/placedelete',
        name:'删除场地',
        component: PlaceDelete
      },
      {
        path:'/placeorder',
        name:'场地预约',
        component: PlaceOrder
      },
      {
        path:'/placeordermsg',
        name:'预约信息',
        component: PlaceOrderMsg
      },
      {
        path:'/queryweekmsg',
        name:'一周信息',
        component: QueryWeekMsg
      },
    ]
  },
  {
    path:'/index',
    name:'index',
    component: Index,
    children:[{
      path:'/placenews',
      name:'场地信息',
      component: PlaceNews
    }]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
