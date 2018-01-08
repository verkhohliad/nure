import { getSpecialities } from '../../api/specialities';

const specialitiesModule = {
  state: {
    headers: [],
    items: []
  },
  mutations: {
    setData(state, data) {
      state.headers = data.headers;
      state.items = data.items;
    }
  },
  actions: {
    async fetchData({ commit }) {
      commit('setData', await getSpecialities())
    },
  },
  getters: {
    getData: (state) => {
      return state;
    }
  }
};

export default specialitiesModule
