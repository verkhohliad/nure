import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'

import mainModule from './main'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    main: mainModule
  }
})

window.store = store;

export default store;
