import { ANNOUNCEMENTS_ACTIONS, ANNOUNCEMENTS_MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ANNOUNCEMENTS_ACTIONS.UPLOAD_ANNOUNCEMENTS]: async state => {
    const announcements = await api.getAnnouncements();
    state.commit(ANNOUNCEMENTS_MUTATIONS.SET_ANNOUNCEMENTS, announcements)
  },
}
