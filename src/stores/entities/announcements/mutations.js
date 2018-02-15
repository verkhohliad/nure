import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_ANNOUNCEMENTS]: (state, payload) => {
    state.push(...payload)
  },
}
