import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './user'
import specialities from './specialities'
import entities from './entities'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    user,
    specialities,
    entities,
  },
  strict: true,
});

window.store = store;

export default store;
