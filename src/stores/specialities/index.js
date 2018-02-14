import { getSpecialities } from '../../api/specialities';

// todo: while it is peace of shit, but need because of data
// todo: refactor the whole module after getting data from server
const specialitiesModule = {
  state: {
    headers: {},
    items: {
      bachelor: {},
      master: {}
    }
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
    getData: state => state
  }
};

export default specialitiesModule
