import httpError from 'http-errors';
import to from 'await-to-js';
import deepCopy from 'deepcopy';

export const validation = (schema, collection) => async (req, res, next) => {
  // remove excess param from body
  Object.keys(req.body).forEach(param => {
    if (!schema._schema[param]) {
      delete req.body[param];
    }
  });

  const finder = deepCopy(req.body);
  // exception, because in db is hash
  delete finder.password;

  let [err, item] = await to(collection.findOne(finder));
  if (err) return next(err);

  // fit item by schema
  if (item) {
    item = Object.keys(schema._schema).reduce((accumulator, param) => {
      accumulator[param] = item[param];
      return accumulator;
    }, {});
  }

  const result = schema.validate(Object.assign(item || {}, req.body));
  console.log(result);
  console.log(schema.isValid());

  if (schema.isValid()) {
    next();
  } else {
    const validationError = schema.validationErrors().map((elem) => {
      return `${elem.name} is ${elem.type}`
    }).join(', ');

    return next(httpError(422, validationError));
  }
};
