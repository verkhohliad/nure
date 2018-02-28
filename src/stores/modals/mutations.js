import { MUTATIONS } from '../../common'

export default {
  [MUTATIONS.SET_OLYMPIAD_MODAL]: (state, payload) => {
    state.olympiadModal = payload;
  },
  [MUTATIONS.SET_IMAGE_MODAL]: (state, payload) => {
    state.imageModal = payload;
  },
}
