import { ACTIONS, MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ACTIONS.UPLOAD_FACULTIES]: async state => {
    const faculties = await api.getFaculties();
    state.commit(MUTATIONS.SET_FACULTIES, faculties)
  },
}
