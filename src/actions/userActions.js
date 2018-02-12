import { USER_MUTATIONS } from '../common'
import { getUserPages } from '../utils'

export const createUserScope = (store) => {
  const userPages = getUserPages(store.state.user.isAdmin);

  // while the whole scope is just pages
  store.commit(USER_MUTATIONS.SET_USER_SCOPE, [...userPages]);
};
