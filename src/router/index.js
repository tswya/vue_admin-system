import Vue from 'vue'
import VueRouter from 'vue-router'

// import Login from '../components/Login.vue'
const Login = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/Login.vue')
// import Home from '../components/Home.vue'
const Home = () =>
  import(/* webpackChunkName: "login_home_welcome" */ '../components/Home.vue')
// import Welcome from '../components/Welcome.vue'
const Welcome = () =>
  import(
    /* webpackChunkName: "login_home_welcome" */ '../components/Welcome.vue'
  )
// import Users from '../components/user/Users.vue'
const Users = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/user/Users.vue'
  )
// import Rights from '../components/power/Rights.vue'
const Rights = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Rights.vue'
  )
// import Roles from '../components/power/Roles.vue'
const Roles = () =>
  import(
    /* webpackChunkName: "Users_Rights_Roles" */ '../components/power/Roles.vue'
  )

// import Cate from '../components/goods/Cate.vue'
const Cate = () =>
  import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Cate.vue')
// import Params from '../components/goods/Params.vue'
const Params = () =>
  import(/* webpackChunkName: "Cate_Params" */ '../components/goods/Params.vue')
// import Report from '../components/report/Report.vue'
const Report = () =>
  import(
    /* webpackChunkName: "Order_Report" */ '../components/report/Report.vue'
  )
// import Orders from '../components/orders/Order.vue'
const Orders = () =>
  import(
    /* webpackChunkName: "Order_Report" */ '../components/orders/Order.vue'
  )
// import Goods from '../components/goods/Goods.vue'
const Goods = () =>
  import(/* webpackChunkName: "Goods_Add" */ '../components/goods/Goods.vue')
// import Add from '../components/goods/Add.vue'
const Add = () =>
  import(/* webpackChunkName: "Goods_Add" */ '../components/goods/Add.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: './login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/reports', component: Report },
        { path: '/goods', component: Goods },
        { path: '/goods/add', component: Add },
        { path: '/params', component: Params },
        { path: '/orders', component: Orders }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
