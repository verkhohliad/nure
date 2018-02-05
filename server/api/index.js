const express = require('express');

const router = express.Router();

router.use('/specialities/', require('./specialities'));
router.use('/auth/', require('./auth'));

module.exports = router;
