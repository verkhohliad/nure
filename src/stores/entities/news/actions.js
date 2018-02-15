import { NEWS_ACTIONS, NEWS_MUTATIONS } from '../../../common'
import * as api from '../../../api'

export default {
  [NEWS_ACTIONS.UPLOAD_NEWS]: async state => {
    const news = await api.getAllNews();
    state.commit(NEWS_MUTATIONS.SET_NEWS, news)
  },
}
