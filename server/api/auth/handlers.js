const User = require('../../db/users');
const bcrypt = require('bcrypt');
const { saltRounds, jwtSecret } = require('../../config/constants');
const jwt = require('jsonwebtoken');

const getUser = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    email
  }, {
    password: false
  })

  res.json({
    success: true,
    user
  })
};

const updateUserInfo = async (req, res, next) => {
  const { email, userInfo } = req.body;

  const updatedUser = await User.update({
    email
  }, {
    name: userInfo.profile.name,
    avatar: userInfo.profile.image
  }, {
    password: false
  })

  res.json({
    success: true,
    user: updatedUser
  })
};

const register = async (req, res, next) => {
  const { user } = req.body;

  let foundUser = await User.findOne({
    email: user.email
  })

  if (foundUser === null) {
    let hash = await bcrypt.hash(user.password, saltRounds)
    let newUser = await User.insert({
      email: user.email,
      password: hash
    })

    res.json({
      success: true,
      token: jwt.sign({ email: user.email }, jwtSecret)
    })
  } else {
    res.json({
      success: false,
      message: 'user already exists'
    })
  }
};

const login = async (req, res, next) => {
  const { user } = req.body;

  let foundUser = await User.findOne({
    email: user.email
  })

  if (foundUser) {
    let eqPassword = await bcrypt.compare(user.password, foundUser.password)
    if (eqPassword) {
      res.json({
        success: true,
        token: jwt.sign({ email: foundUser.email }, jwtSecret)
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

exports.getUser = getUser;
exports.updateUserInfo = updateUserInfo;
exports.register = register;
exports.login = login;
