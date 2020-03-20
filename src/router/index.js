import Router from 'vue-router'

const AppContainer = () =>
  import ('../container/AppContainer.vue')

const HomePage = () =>
  import ('../components/Home.vue')

let routes = [{
  path: '/',
  name: '',
  component: AppContainer,
  children: [{
    path: 'home',
    name: 'Home',
    component: HomePage,
  }]
}]

let router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

export default router;
