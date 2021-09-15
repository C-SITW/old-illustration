import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/home/Home.vue'),
},
{
  path: '/favorite',
  name: 'Favorite',
  component: () => import(/* webpackChunkName: "favorite" */ '../views/favorite/Favorite.vue'),
},
{
  path: '/message',
  name: 'Message',
  component: () => import(/* webpackChunkName: "message" */ '../views/message/Message.vue'),
},
{
  path: '/personal',
  name: 'Personal',
  component: () => import(/* webpackChunkName: "personal" */ '../views/personal/Personal.vue'),
},
{
  path: '/edituserinfo',
  name: 'Edituserinfo',
  component: () => import(/* webpackChunkName: "edituserinfo" */ '../views/personal/Edituserinfo.vue'),
},
{
  path: '/artists',
  name: 'Artists',
  component: () => import(/* webpackChunkName: "artists" */ '../views/artists/Artists.vue'),
},
{
  path: '/artist/:id',
  name: 'Artist',
  component: () => import(/* webpackChunkName: "Artist" */ '../views/artists/Artist.vue'),
},
{
  path: '/illustration/:id',
  name: 'Illustration',
  component: () => import(/* webpackChunkName: "illustration" */ '../views/illustration/Illustration.vue'),
},
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "login" */ '../views/login/Login.vue'),
  beforeEnter(to, from, next) {
    const { isLogin } = localStorage;
    isLogin ? next({ name: 'Home' }) : next();
  }
},
{
  path: '/register',
  name: 'Register',
  component: () => import(/* webpackChunkName: "register" */ '../views/register/Register.vue'),
  beforeEnter(to, from, next) {
    const { isLogin } = localStorage;
    isLogin ? next({ name: 'Home' }) : next();
  }
},
{
  path: '/detail',
  name: 'Detail',
  component: () => import(/* webpackChunkName: "detail" */ '../views/detail/Detail.vue'),
},
{
  path: '/more',
  name: 'More',
  component: () => import(/* webpackChunkName: "more" */ '../views/more/More.vue'),
},

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage;
  const state = (isLogin || (to.name === 'Login' || to.name === 'Register' || to.name === 'Detail'))
  state ? next() : next({ name: 'Login' })
})


export default router
