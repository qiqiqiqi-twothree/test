import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from "../views/Index.vue";
// import Home from "../views/Home.vue";
const Index = () => import('@/views/Index.vue')
const Login = () => import('@/views/Login.vue')
const Home = () => import('@/views/Home.vue')
const watchDetail = () => import('@/views/watchDetail.vue')
const swipeDetail = () => import('@/views/swipeDetail.vue')
const topDetail = () => import('@/views/topDetail.vue')
const category = () => import('@/views/category.vue') //分类
const comment = () => import('@/views/comment.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/watchDetail',
    name: '快报详情',
    component: watchDetail
  },
  {
    path: '/swipeDetail',
    name: '轮播图详情',
    component: swipeDetail
  },
  {
    path: '/topDetail',
    name: 'index顶部',
    component: topDetail
  },
  {
    path: '/category',
    name: '分类',
    component: category
  },
  {
    path: '/comment',
    name: '评论',
    component: comment
  }
]

const router = new VueRouter({
  // mode: "hash",
  base: process.env.BASE_URL,
  routes
})

export default router //导出router main.js引用
