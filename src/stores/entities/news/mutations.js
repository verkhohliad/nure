import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_NEWS]: (state, payload) => {
    state.push(...payload)
  },
}
