import { ANNOUNCEMENTS_MUTATIONS } from '../../../common'

export default {
  [ANNOUNCEMENTS_MUTATIONS.SET_ANNOUNCEMENTS]: (state, payload) => {
    // eslint-disable-next-line
    state = payload;
  },
}
