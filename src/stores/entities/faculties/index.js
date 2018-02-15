import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const faculties = {
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

export default faculties
