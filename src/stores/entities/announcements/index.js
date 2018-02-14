import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const announcements = {
  state: [],
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

export default announcements
