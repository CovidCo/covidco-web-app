import Router from 'vue-router'

const AppContainer = () =>
  import ('../container/AppContainer.vue')

const MainPage = () =>
  import ('../components/Main.vue')

let routes = [{
  path: '/',
  redirect: '/main',
  name: '',
  component: AppContainer,
  children: [{
    path: 'main',
    name: 'Main',
    component: MainPage,
  }]
}]

let router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

export default router;
