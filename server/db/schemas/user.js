import SimpleSchema from 'simpl-schema';

const schema = new SimpleSchema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  isAdmin: {
    type: Boolean,
    defaultValue: false,
    required: true
  }
}, { requiredByDefault: false });

export default schema.newContext()
