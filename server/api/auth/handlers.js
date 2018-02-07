import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import to from 'await-to-js';

import Users from '../../db/users';
import { SERVER_CONFIG } from '../../config/constants';

export const register = async (req, res, next) => {
  // const { email, password, name, isAdmin } = req.body;

  const [err, user] = await to(Users.findOne({ email: req.body.email }));
  if (err) next(err);

  if (!user) {
    const password = await bcrypt.hash(req.body.password, SERVER_CONFIG.SALT_ROUNDS);
    const token = jwt.sign({ email: req.body.email }, SERVER_CONFIG.JWT_SECRET);

    const [err, newUser] = await to(User.insert({
      email: user.email,
      password: hash,
      token
    }));
    if (err) next(err);

    res.json({
      success: true,
      token,
      newUser
    })
  } else {
    res.json({
      success: false,
      message: 'user already exists'
    })
  }
};

export const login = async (req, res, next) => {
  const { user } = req.body;

  let foundUser = await User.findOne({
    email: user.email
  })

  if (foundUser) {
    let eqPassword = await bcrypt.compare(user.password, foundUser.password)
    if (eqPassword) {
      res.json({
        success: true,
        token: jwt.sign({ email: foundUser.email }, SERVER_CONFIG.JWT_SECRET)
      })
    } else {
      res.json({
        success: false,
        message: 'not exists'
      })
    }
  } else {
    res.json({
      success: false,
      message: 'not exists'
    })
  }
};
