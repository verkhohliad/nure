const express = require('express');

const router = express.Router();

const api = require('./handlers');

router.get('/', api.getSpecialities);

module.exports = router;
