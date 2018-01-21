import getDb from './index'
import SpecialitiesSchema from './schemas/specialities'

export default {
  findOne: (...args) => {
    return getDb('specialities').findOne(...args)
  },
  find: (...args) => {
    return getDb('specialities').find(...args)
  },
  insert: (item) => {
    SpecialitiesSchema.validate(item)
    if (SpecialitiesSchema.isValid()) {
      return getDb('specialities').insert(item)
    } else {
      console.log(SpecialitiesSchema.validationErrors())
    }
  },
  update: (item, update, ...args) => {
    SpecialitiesSchema.validate(update, { modifier: true })
    if (SpecialitiesSchema.isValid()) {
      return getDb('specialities').update(item, update, ...args)
    } else {
      console.log(SpecialitiesSchema.validationErrors())
    }
  }
}
