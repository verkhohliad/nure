import { MUTATIONS } from '../../../common'

export default {
  [MUTATIONS.SET_NEWS]: (state, payload) => {
    // eslint-disable-next-line
    state = payload;
  },
}
