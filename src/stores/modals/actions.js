import { ACTIONS, MUTATIONS } from '../../common'

export default {
  [ACTIONS.SWITCH_OLYMPIAD_MODAL]: async state => {

    state.commit(MUTATIONS.SET_OLYMPIAD_MODAL, !state.state.olympiadModal);
  },
  [ACTIONS.SWITCH_IMAGE_MODAL]: async state => {

    state.commit(MUTATIONS.SET_IMAGE_MODAL, !state.state.imageModal);
  },
}
