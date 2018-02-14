import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './user'
import specialities from './specialities'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    user,
    specialities,
  },
  strict: true,
});

window.store = store;

export default store;
