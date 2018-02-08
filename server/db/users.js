import httpError from 'http-errors';

import * as db from './index';
import UserSchema from './schemas/user';
import { COLLECTION_NAMES } from '../config/constants';

const Users = {
  findOne: (...params) => db.getCollection(COLLECTION_NAMES.USERS).findOne(...params),
  find: params => db.getCollection(COLLECTION_NAMES.USERS).find(...params),
  insert: (item) => {
    UserSchema.validate(item);

    if (UserSchema.isValid()) {
      return db.getCollection(COLLECTION_NAMES.USERS).insert(item)
    } else {
      throw httpError(422, `Request's data not valid ${JSON.stringify(UserSchema.validationErrors())}`);
    }
  },
  update: (item, update, params) => {
    UserSchema.validate(update, { modifier: true });

    if (UserSchema.isValid()) {
      return db.getCollection(COLLECTION_NAMES.USERS).update(item, update, ...params)
    } else {
      throw httpError(422, `Request's data not valid ${JSON.stringify(UserSchema.validationErrors())}`);
    }
  },
  delete: _id => db.getCollection(COLLECTION_NAMES.USERS).deleteOne({ _id })
};

export default Users;
