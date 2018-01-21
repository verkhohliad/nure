const express = require('express');

const router = express.Router();

router.use('/specialities/', require('./specialities'));

module.exports = router;
