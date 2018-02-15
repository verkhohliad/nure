import { SPECIALITIES_ACTIONS, SPECIALITIES_MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [SPECIALITIES_ACTIONS.UPLOAD_SPECIALITIES]: async state => {
    const specialities = await api.getSpecialities();
    state.commit(SPECIALITIES_MUTATIONS.SET_SPECIALITIES, specialities)
  },
}
