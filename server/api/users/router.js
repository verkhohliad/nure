import express from 'express';

import * as api from './handlers';

const router = express.Router();

router.get('/', api.getUsers);
router.get('/:_id', api.getUser);
router.put('/:_id', api.updateUser);
router.post('/', api.createUser);
router.delete('/:_id', api.deleteUser);

export default router;
