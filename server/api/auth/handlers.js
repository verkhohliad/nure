import bcrypt from 'bcrypt';
import to from 'await-to-js';
import httpError from 'http-errors';

import { Users } from '../../db/collections';
import { SERVER_CONFIG } from '../../config/constants';
import { generateToken } from '../../utils';

// TODO: need to add accept email sending and validation email
export const register = async (req, res, next) => {
  const { email, password, name } = req.body;

  const [error1, user] = await to(Users.findOne({ email }));
  if (error1) return next(error1);
  if (user) {
    return next(httpError(422, 'User with this email already exist.'));
  }

  const [error2, hash] = await to(bcrypt.hash(password, SERVER_CONFIG.SALT_ROUNDS));
  if (error2) return next(error2);
  const token = generateToken(email);

  const [error3, newUser] = await to(Users.insert({
    email,
    password: hash,
    token,
    name
  }));
  if (error3) return next(error3);

  res.json({
    success: true,
    token,
    email
  });
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const [error1, user] = await to(Users.findOne({ email }));
  if (error1) next(error1);
  if (!user) next(httpError(404, 'User not found.'));

  const [error2, isValidPassword] = await to(bcrypt.compare(password, user.password));
  if (error2) return next(error2);
  if (!isValidPassword) return next(httpError(401, 'Wrong password'));

  res.json({
    success: true,
    token: user.token,
    email: user.email
  });
};
