import { SPECIALIZATIONS_ACTIONS, SPECIALIZATIONS_MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [SPECIALIZATIONS_ACTIONS.UPLOAD_SPECIALIZATIONS]: async state => {
    const specializations = await api.getSpecializations();
    state.commit(SPECIALIZATIONS_MUTATIONS.SET_SPECIALIZATIONS, specializations)
  },
}
