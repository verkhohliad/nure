import { GETTERS } from '../../../common'

export default {
  [GETTERS.GET_ANNOUNCEMENTS]: state => {
    return state;
  },
  [GETTERS.GET_ANNOUNCEMENT_BY_ID]: (state) => (id) => {
    return state.find(item => item.uid === id);
  },
}
