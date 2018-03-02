import express from 'express';

import * as api from './handlers';
// import { validation } from '../../middlewares';
// import { UserSchema } from '../../db/schemas';
// import { Users } from '../../db/collections';

const router = express.Router();

router.get('/', api.getOlympiadUsers);
router.get('/:uid', api.getOlympiadUser); // or email
router.delete('/:uid', api.deleteOlympiadUser);

router.post('/register', api.createOlympiadUser);
router.put('/:uid', api.updateOlympiadUser);

export default router;
