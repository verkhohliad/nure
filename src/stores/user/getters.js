import { GETTERS } from '../../common'

export default {
  [GETTERS.GET_USER_SCOPE]: state => {
    return state.scope
  },
  [GETTERS.GET_USER_ADMIN_ACCESS]: state => {
    return state.isAdmin
  },
}
