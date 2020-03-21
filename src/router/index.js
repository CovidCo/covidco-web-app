import Router from 'vue-router'

const AppContainer = () =>
  import ('../container/AppContainer.vue')

const MainPage = () =>
  import ('../components/Main.vue')

const TermsAndConditions = () =>
  import ('../components/pages/TermsAndConditions.vue')

const RecommendationsPage = () =>
  import ('../components/pages/Recommendations.vue')

const SymptomsPage = () =>
  import ('../components/pages/Symptoms.vue')

const InitialDiagnosis = () =>
  import ('../components/diagnosis/Initial.vue')

let routes = [{
  path: '/',
  redirect: '/main',
  name: '',
  component: AppContainer,
  children: [{
    path: 'main',
    name: 'Main',
    component: MainPage
  }, {
    path: 'recommendations',
    name: 'Recommendations',
    component: RecommendationsPage
  }, {
    path: 'symptoms',
    name: 'Symptoms',
    component: SymptomsPage
  }, {
    path: 'initial_diagnosis',
    name: 'InitialDiagnosis',
    component: InitialDiagnosis
  }, {
    path: 'terms',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  }]
}]

let router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

export default router;
