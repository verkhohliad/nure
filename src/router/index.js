import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../containers/MainPage'
import Specialities from '../containers/Specialities'
import Admission from '../containers/Admission'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: MainPage},
    {path: '/specialities', component: Specialities},
    {path: '/admission', component: Admission}
  ]
})
