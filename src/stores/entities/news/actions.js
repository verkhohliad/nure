import { ACTIONS, MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [ACTIONS.UPLOAD_NEWS]: async state => {
    const news = await api.getAllNews();
    state.commit(MUTATIONS.SET_NEWS, news)
  },
}
