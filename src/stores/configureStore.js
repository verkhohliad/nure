import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import user from './user'
import entities from './entities'
import modals from './modals'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    user,
    entities,
    modals,
  },
  strict: true,
});

window.store = store;

export default store;
