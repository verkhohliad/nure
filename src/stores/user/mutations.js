import { MUTATIONS } from '../../common'

export default {
  [MUTATIONS.SET_USER_SCOPE]: (state, payload) => {
    state.scope = [...payload]
  },
}
