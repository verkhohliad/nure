import httpError from 'http-errors';

export const validation = schema => (req, res, next) => {
  schema.validate(req.body);

  if (schema.isValid()) {
    next();
  } else {
    const validationError = schema.validationErrors().map((elem) => {
      return ` ${elem.name} is ${elem.type}`
    }).join(',');

    next(httpError(422, validationError));
  }
};
