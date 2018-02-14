import { USER_GETTERS } from '../../common'

export default {
  [USER_GETTERS.GET_USER_SCOPE]: (state) => {
    return state.scope
  },
}
