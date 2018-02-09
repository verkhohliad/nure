import to from 'await-to-js';
import httpError from 'http-errors';

import { Users } from '../../db/collections';

export const getUsers = async (req, res, next) => {
  const [err, users] = await to(Users.find({}, {
    password: false,
    token: false
  }));
  if (err) return next(err);

  res.json({
    success: true,
    users
  })
};

export const getUser = async (req, res, next) => {
  const { _id } = req.params;

  let [err, user] = await to(Users.findOne({ _id }, {
    password: false,
    token: false
  }));
  if (err) return next(err);

  if (!user) {
    [err, user] = await to(Users.findOne({ email: _id }, {
      password: false,
      token: false
    }));
    if (err) return next(err);

    if (!user) {
      return next(httpError(404, 'User not found'));
    }
  }

  res.json({
    success: true,
    ...user
  })
};

// TODO: add email notification to new user with email and password
export const createUser = async (req, res, next) => {

};

export const updateUser = async (req, res, next) => {
  const { email, userInfo } = req.body;

  const updatedUser = await to(Users.update({ email }, ...userInfo, { password: false }));

  res.json({
    success: true,
    user: updatedUser
  })
};

export const deleteUser = async (req, res, next) => {

};
