import Joi from 'joi';

export const UserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  token: Joi.string(),
  name: Joi.string().min(3).max(30).required(),
  isAdmin: Joi.boolean().default(false)
});
