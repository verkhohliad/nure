import { ACTIONS, MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ACTIONS.UPLOAD_SPECIALITIES]: async state => {
    const specialities = await api.getSpecialities();
    state.commit(MUTATIONS.SET_SPECIALITIES, specialities)
  },
}
