import express from 'express';

import * as api from './handlers';

const router = express.Router();

router.post('/register', api.register);
router.post('/login', api.login);

export default router;
