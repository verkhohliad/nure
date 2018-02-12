import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './containers/MainPage'
import Specialities from './containers/Specialities'
import Admission from './containers/Admission'
import Olympiad from './containers/Olympiad'
import News from './containers/News'
import Exams from './containers/Exams'
import Contact from './containers/Contact'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: MainPage },
    { path: '/specialities', component: Specialities },
    { path: '/admission', component: Admission },
    { path: '/olympiad', component: Olympiad },
    { path: '/news', component: News },
    // { path: '/exams', component: Exams },
    { path: '/contact', component: Contact }
  ],
  // scrollBehavior: function (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
