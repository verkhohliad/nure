import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_ANNOUNCEMENTS]: (state, payload) => {
    // eslint-disable-next-line
    state = payload;
  },
}
