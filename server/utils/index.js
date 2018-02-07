
export const error = (err) => {
  let errResult = err;

  if (typeof err === 'object') {
    errResult = JSON.stringify(err);
  }

  return new Error(errResult);
};
