import httpError from 'http-errors';

// this middleware mean that token middleware has already passed
export const adminAccess = async (req, res, next) => {
  if (!req.user.isAdmin) {
    console.log('ee');
    return next(httpError(401, 'Access denied'));
  }

  next();
};
