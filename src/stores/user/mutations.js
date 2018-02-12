import { USER_MUTATIONS } from '../../common'

export default {
  [USER_MUTATIONS.SET_USER_SCOPE]: (state, payload) => {
    state.scope = [...payload]
  }
}
