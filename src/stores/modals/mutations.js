import { MUTATIONS } from '../../common'

export default {
  [MUTATIONS.SET_OLYMPIAD_MODAL]: (state, payload) => {
    state.olympiadModal = payload;
  },
}
