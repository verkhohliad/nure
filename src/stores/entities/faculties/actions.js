import { FACULTIES_ACTIONS, FACULTIES_MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [FACULTIES_ACTIONS.UPLOAD_FACULTIES]: async state => {
    const faculties = await api.getFaculties();
    state.commit(FACULTIES_MUTATIONS.SET_FACULTIES, faculties)
  },
}
