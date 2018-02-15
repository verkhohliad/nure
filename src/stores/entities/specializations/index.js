import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const specializations = {
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

export default specializations
