import Vue from 'vue'
import Router from 'vue-router'

import TheLoading from './pages/layout/TheLoading'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '*', redirect: '/loading' },
    { path: '/loading', component: TheLoading },
  ],
});

export const addRoutes = routes => router.addRoutes([...routes]);

export default router;
