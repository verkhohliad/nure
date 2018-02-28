import jwt from 'jsonwebtoken';

import { SERVER_CONFIG } from '../config/constants';

export * from './mailer';

export const generateToken = email => jwt.sign({ email }, SERVER_CONFIG.JWT_SECRET);
