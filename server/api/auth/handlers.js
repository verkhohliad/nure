import bcrypt from 'bcrypt';
import to from 'await-to-js';
import httpError from 'http-errors';

import Users from '../../db/users';
import { SERVER_CONFIG, ERROR_MESSAGES } from '../../config/constants';
import { generateToken } from '../../utils';

export const register = async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!email) {
    return next(httpError(422, ERROR_MESSAGES.PARAM_IS_REQUIRED('email')))
  } else if (!password) {
    return next(httpError(422, ERROR_MESSAGES.PARAM_IS_REQUIRED('password')))
  }

  const [error1, user] = await to(Users.findOne({ email }));
  if (error1) return next(error1);
  if (user) {
    return next(httpError(422, `User with email: ${email} already exist.`));
  }

  const hash = await bcrypt.hash(password, SERVER_CONFIG.SALT_ROUNDS);
  const token = generateToken(email);

  const [error2, newUser] = await to(Users.insert({
    email,
    password: hash,
    token,
    name
  }, { password: false }));
  if (error2) { console.log(error2); return next(error2); }

  res.json({
    success: true,
    newUser
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const [error, user] = await to(Users.findOne({ email }, { password: false }));
  if (error) next(error);
  if (!user) next(httpError(404, `User with email: ${email} not found.`));

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) next(httpError(401, 'Wrong password'));

  res.json({
    success: true,
    user
  });
};
