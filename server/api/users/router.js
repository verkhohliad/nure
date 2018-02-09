import express from 'express';

import * as api from './handlers';
import { token, validation, adminAccess } from '../../middlewares';
import { UserSchema } from '../../db/schemas';
import { Users } from '../../db/collections';

const router = express.Router();

router.use(token);
router.use(adminAccess);

router.get('/', api.getUsers);
router.get('/:_id', api.getUser); // or email
router.delete('/:_id', api.deleteUser);

router.use(validation(UserSchema, Users));

router.post('/', api.createUser);
router.put('/:_id', api.updateUser);

export default router;
