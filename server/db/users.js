const getDb = require('./index');
const UserSchema = require('./schemas/user');

export default {
  findOne: (...args) => {
    return getDb('users').findOne(...args)
  },
  find: (...args) => {
    return getDb('users').find(...args)
  },
  insert: (item) => {
    UserSchema.validate(item)
    if (UserSchema.isValid()) {
      return getDb('users').insert(item)
    } else {
      console.log(UserSchema.validationErrors())
    }
  },
  update: (item, update, ...args) => {
    UserSchema.validate(update, { modifier: true })
    if (UserSchema.isValid()) {
      return getDb('users').update(item, update, ...args)
    } else {
      console.log(UserSchema.validationErrors())
    }
  }
}
