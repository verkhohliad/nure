import { GETTERS } from '../../common'

export default {
  [GETTERS.GET_MODALS]: state => {
    return state;
  },
  [GETTERS.GET_OLYMPIAD_MODAL]: state => {
    console.log(state);
    return state.olympiadModal;
  },
}
