import statuses from 'statuses';

export const apiErrorHandler = (error, req, res, next) => {
  // todo: check 422 - unauthorize
  console.log('---------', error, '-------------');

  let status = error.status || error.statusCode || 500;
  if (status < 400) status = 500;

  const body = {
    success: false,
    status
  };

  // internal server errors
  if (status >= 500) {
    console.error(error.stack);
    body.message = statuses[status];
    res.status(status).json(body);
    return;
  }

  // client errors
  body.message = error.message;

  if (error.code) body.code = error.code;
  if (error.name) body.name = error.name;
  if (error.type) body.type = error.type;

  res.status(status).json(body);
};
