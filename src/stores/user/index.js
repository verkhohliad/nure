import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * information of current user (temporary version)
 * @type {{state: {scope: Array, isAdmin: boolean}, mutations: {}, actions: {}, getters: {}}}
 */
const user = {
  state: {
    scope: [],
    isAdmin: false,
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

export default user
