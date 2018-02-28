import Joi from 'joi';

export const OlympiadUserSchema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  surname: Joi.string().min(3).max(30).required(),
  patronymic: Joi.string().min(3).max(30).required(),
  placeOfStudy: Joi.string().required(),
  email: Joi.string().regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).required(),
  phone: Joi.string().regex(/^\+380\d{3}\d{2}\d{2}\d{2}$/).required(),
  subjects: Joi.array().items(Joi.string().required()).required(),
});
