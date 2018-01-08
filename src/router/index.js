import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../containers/MainPage'
import Specialities from '../containers/Specialities';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: MainPage },
    { path: '/specialities', component: Specialities }
  ]
})
