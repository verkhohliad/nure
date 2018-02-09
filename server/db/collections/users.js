import * as db from '../index';
import { COLLECTION_NAMES } from '../../config/constants';

export const Users = {
  findOne: (...params) => db.getCollection(COLLECTION_NAMES.USERS).findOne(...params),
  find: (...params) => db.getCollection(COLLECTION_NAMES.USERS).find(...params),
  insert: item => db.getCollection(COLLECTION_NAMES.USERS).insert(item),
  update: (item, update, params) => db.getCollection(COLLECTION_NAMES.USERS).update(item, update, ...params),
  delete: _id => db.getCollection(COLLECTION_NAMES.USERS).deleteOne({ _id })
};
