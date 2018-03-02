import express from 'express';

import api from './handlers';

const router = express.Router();

router.get('/', api.getSpecialities);

export default router;
