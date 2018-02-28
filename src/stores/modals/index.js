import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * state of project modals (temporary version)
 * @type {{state: {scope: Array, isAdmin: boolean}, mutations: {}, actions: {}, getters: {}}}
 */
const modals = {
  state: {
    olympiadModal: false,
    imageModal: {
      show: false,
      image: ''
    }
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
  },
  getters: {
    ...getters,
  },
};

export default modals
