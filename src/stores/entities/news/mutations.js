import { NEWS_MUTATIONS } from '../../../common'

export default {
  [NEWS_MUTATIONS.SET_NEWS]: (state, payload) => {
    // eslint-disable-next-line
    state = payload;
  },
}
