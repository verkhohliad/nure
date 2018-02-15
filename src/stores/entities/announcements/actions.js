import { ACTIONS, MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ACTIONS.UPLOAD_ANNOUNCEMENTS]: async state => {
    const announcements = await api.getAnnouncements();
    state.commit(MUTATIONS.SET_ANNOUNCEMENTS, announcements)
  },
}
