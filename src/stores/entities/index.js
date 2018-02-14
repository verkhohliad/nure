import announcements from './announcements'

const entities = {
  modules: {
    announcements,
  },
  actions: {
    loadEntities(context) {
      // todo: api gets of all entities and commit them to different modules
    },
  },
};

export default entities
