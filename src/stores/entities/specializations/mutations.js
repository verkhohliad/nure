import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_SPECIALIZATIONS]: (state, payload) => {
    state.push(...payload)
  },
}
