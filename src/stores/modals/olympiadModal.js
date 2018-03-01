import { GETTERS, MUTATIONS } from '../../common'

const initialState = {
  show: false,
};

const modals = {
  state: { ...initialState },
  mutations: {
    [MUTATIONS.OPEN_OLYMPIAD_MODAL]: (state, payload) => {
      Object.assign(state, {
        ...payload,
        show: true,
      });
    },
    [MUTATIONS.CLOSE_OLYMPIAD_MODAL]: state => {
      Object.assign(state, initialState);
    },
  },
  getters: {
    [GETTERS.GET_OLYMPIAD_MODAL]: state => state,
  },
};

export default modals
