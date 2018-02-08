import express from 'express';

import * as api from './handlers';
import { validation } from '../../middlewares';
import { UserSchema } from '../../db/schemas';

const router = express.Router();

router.use(validation(UserSchema));

router.post('/register', api.register);
router.post('/login', api.login);

export default router;
