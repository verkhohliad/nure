import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'

import mainModule from './main/index'
import specialitiesModule from './specialities/index'

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    main: mainModule,
    specialities: specialitiesModule
  },
  getters: {
    getSpecialities: (state, getters) => {
      return state.specialities;
    }
  }
})

window.store = store;

export default store;
