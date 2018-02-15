import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_FACULTIES]: (state, payload) => {
    state.push(...payload)
  },
}
