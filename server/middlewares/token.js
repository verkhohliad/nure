import to from 'await-to-js';
import httpError from 'http-errors';

import { Users } from '../db/collections';
import { HEADER_ITEMS } from '../config/constants';

export const token = async (req, res, next) => {
  const userToken = req.get(HEADER_ITEMS.USER_TOKEN);

  const [err, user] = await to(Users.findOne({ token: userToken }));
  if (err) return next(err);

  if (!user) {
    return next(httpError(401, 'Access denied'));
  }

  req.user = user;
  next();
};
