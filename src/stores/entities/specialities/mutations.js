import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_SPECIALITIES]: (state, payload) => {
    state.push(...payload)
  },
}
