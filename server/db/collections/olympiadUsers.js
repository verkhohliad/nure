import * as db from '../index';
import { COLLECTION_NAMES } from '../../config/constants';

export const OlympiadUsers = {
  findOneAndUpdate: (item, update, params) => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).findOneAndUpdate(item, update, params),
  findOne: (...params) => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).findOne(...params),
  find: (...params) => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).find(params),
  insert: item => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).insert(item),
  update: (item, update, params) => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).update(item, update, params),
  delete: uid => db.getCollection(COLLECTION_NAMES.OLYMPIAD_USERS).deleteOne({ uid })
};
