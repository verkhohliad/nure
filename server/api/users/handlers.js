import to from 'await-to-js';

import Users from '../../db/users';

export const getUsers = async (req, res, next) => {

};

export const getUser = async (req, res, next) => {
  const { email } = req.body;

  const user = await Users.findOne({
    email
  }, {
    password: false
  })

  res.json({
    success: true,
    user
  })
};

export const updateUser = async (req, res, next) => {
  const { email, userInfo } = req.body;

  const updatedUser = await to(Users.update({ email }, ...userInfo, { password: false }));

  res.json({
    success: true,
    user: updatedUser
  })
};
