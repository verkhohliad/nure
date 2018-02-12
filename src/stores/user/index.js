import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * information of current user
 * @type {{state: {scope: Array}, mutations: {}, actions: {}, getters: {}}}
 */
const user = {
  state: {
    scope: [],
    isAdmin: false
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
    ...getters
  }
}

export default user
