import SimpleSchema from 'simpl-schema'

// TODO: need to create 3 endpoints: specialities, specializations, fields_of_knowledge
const schema = new SimpleSchema({
  branch_of_knowledge: { type: String, required: true },
  specialty: { type: String, required: true },
  specialization: { type: String, required: true },
  coefficients: { type: String, required: true },
  passing_score: { type: Number, required: true },
  licensed_volume: { type: String, required: true },
  training_period: { type: String, required: true },
  cost: { type: String, required: true },

  createdAt: { type: Date },
}, { requiredByDefault: false })

export default schema.newContext()
