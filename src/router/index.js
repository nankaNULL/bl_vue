import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Index from '@/pages/Index'
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import Personal from '@/pages/Personal'
// import Music from '@/pages/Music'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'Header', component: Header},
    {path: '/index', name: 'Index', component: Index}
    // {path: '/login', name: 'Login', component: Login},
    // {path: '/register', name: 'Register', component: Register},
    // {path: '/Personal', name: 'Personal', component: Personal},
    // {path: '/Music', name: 'Music', component: Music}
  ]
})
