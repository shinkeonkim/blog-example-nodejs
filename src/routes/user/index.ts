import { Router } from 'express';
import { users } from './user.controller';

const router = Router();

router.get('/', users);

export default router;
