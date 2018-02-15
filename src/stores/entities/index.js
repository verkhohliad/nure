import announcements from './announcements'
import { ENTITIES_ACTIONS, ANNOUNCEMENTS_ACTIONS } from '../../common'

const entities = {
  modules: {
    announcements,
  },
  actions: {
    [ENTITIES_ACTIONS.UPLOAD_ALL_ENTITIES]: async state => {
      // todo: api gets of all entities and commit them to different modules
      return await state.dispatch(ANNOUNCEMENTS_ACTIONS.UPLOAD_ANNOUNCEMENTS)
    },
  },
};

export default entities
