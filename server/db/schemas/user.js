const SimpleSchema = require('simpl-schema');

const schema = new SimpleSchema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  profile: Object,
  'profile.name': String,
  'profile.image': String
}, { requiredByDefault: false })

export default schema.newContext()
