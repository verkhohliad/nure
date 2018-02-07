import getDb from './index';
import UserSchema from './schemas/user';
import { COLLECTION_NAMES } from '../config/constants';

const users = {
  findOne: params => getDb(COLLECTION_NAMES.USERS).findOne(...params),
  find: params => getDb(COLLECTION_NAMES.USERS).find(...params),
  insert: (item) => {
    UserSchema.validate(item);

    if (UserSchema.isValid()) {
      return getDb(COLLECTION_NAMES.USERS).insert(item)
    } else {
      throw new Error(UserSchema.validationErrors());
    }
  },
  update: (item, update, params) => {
    UserSchema.validate(update, { modifier: true });

    if (UserSchema.isValid()) {
      return getDb(COLLECTION_NAMES.USERS).update(item, update, ...params)
    } else {
      throw Error(UserSchema.validationErrors());
    }
  },
  delete: _id => getDb(COLLECTION_NAMES.USERS).deleteOne({ _id })
};

export default users;
