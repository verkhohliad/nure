import { ACTIONS, MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ACTIONS.UPLOAD_SPECIALIZATIONS]: async state => {
    const specializations = await api.getSpecializations();
    state.commit(MUTATIONS.SET_SPECIALIZATIONS, specializations)
  },
}
