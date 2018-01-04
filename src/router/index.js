import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../containers/MainPage'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: MainPage },
    { path: '/specialities', component: HelloWorld }
  ]
})
