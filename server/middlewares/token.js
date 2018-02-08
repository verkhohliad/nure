import to from 'await-to-js';
import httpError from 'http-errors';

import Users from '../db/users';
import { HEADER_ITEMS } from '../config/constants';

export const token = async (req, res, next) => {
  const userToken = req.headers[HEADER_ITEMS.USER_TOKEN];

  const [err, user] = await to(Users.findOne({ token: userToken }));
  if (err) next(err);

  if (!user) {
    next(httpError(401, 'Access denied'));
  }

  req.user = user;
  next();
};
