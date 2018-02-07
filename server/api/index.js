import express from 'express';

import authRouter from './auth/router';
import usersRouter from './users/router';
import specialitiesRouter from './specialities/router';

const router = express.Router();

router.use('/auth/', authRouter);
router.use('/users', usersRouter);
router.use('/specialities/', specialitiesRouter);

export default router;
