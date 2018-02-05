const express = require('express');

const router = express.Router();

const api = require('./handlers');

router.get('/', api.getUser);
router.put('/', api.updateUserInfo);
router.post('/register', api.register);
router.post('/login', api.login);

module.exports = router;
