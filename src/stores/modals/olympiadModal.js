import to from 'await-to-js'

import { GETTERS, MUTATIONS, ACTIONS } from '../../common'
import { registerOlympiadUser } from '../../api'

const initialState = {
  show: false,
};

const modals = {
  state: { ...initialState },
  actions: { // todo: change it
    [ACTIONS.OLYMPIAD_REGISTER_USER]: async (state, payload) => {
      const [err, result] = await to(registerOlympiadUser(payload));
      if (err) console.log('rrr', err); // bad notify

      // notify :)
      console.log(result);
      return !!result;
    },
  },
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
