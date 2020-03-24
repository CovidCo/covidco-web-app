import Router from 'vue-router'
import firebase from 'firebase'

const AppContainer = () =>
  import ('../container/AppContainer.vue')

const DoctorContainer = () =>
  import ('../container/DoctorContainer.vue')

const MainPage = () =>
  import ('../components/Main.vue')

const TermsAndConditions = () =>
  import ('../components/pages/TermsAndConditions.vue')

const RecommendationsPage = () =>
  import ('../components/pages/Recommendations.vue')

const AttentionLinesPage = () =>
  import ('../components/pages/AttentionLines.vue')

const SymptomsPage = () =>
  import ('../components/pages/Symptoms.vue')

const InitialDiagnosis = () =>
  import ('../components/diagnosis/Initial.vue')

const BeAtHome = () =>
  import ('../components/pages/BeAtHome.vue')

<<<<<<< HEAD
const LoginPage = () =>
  import ('../components/auth/Login.vue')

const DashboardDoctor = () =>
  import ('../components/dashboard/Doctor.vue')

const Users = () =>
  import ('../components/diagnosis/Users.vue')

let routes = [{
    path: '/',
    redirect: '/main',
    name: '',
    component: AppContainer,
    children: [
      {
      path: 'main',
      name: 'Main',
      component: MainPage
      }, {
        path: 'recommendations',
        name: 'Recommendations',
        component: RecommendationsPage
      },{
        path: 'attention_lines',
        name: 'AttentionLines',
        component: AttentionLinesPage
      },
      {
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
      }, {
        path: 'beathome',
        name: 'BeAtHome',
        component: BeAtHome
      }, {
      path: 'users',
      name: 'Users',
      component: Users
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: DoctorContainer,
    meta: {
      requiresAuth: true
    },
    children: [{
        path: '',
        name: 'Dashboard',
        component: DashboardDoctor
      }
    ]
  }
]

let router = new Router({
    mode: 'history', // https://router.vuejs.org/api/#mode
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

router.beforeEach(async (to, from, next) => {
    const currentUser = firebase.auth().currentUser
    console.log(currentUser)
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isCurrentUser = currentUser != null ? true : false
    const currentUserId = currentUser != null ? currentUser.uid : ''
    if (requiresAuth){
      if (isCurrentUser && currentUserId){
        console.log('where are you going')
        next();
      } else {
        next({path: '/login', replace: true})
      }
    } else {
      next();
    }
});

export default router;
