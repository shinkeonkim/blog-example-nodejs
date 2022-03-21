import { Router } from 'express';
import userRouter from './user';
import articleRouter from './article';

const router = Router();

router.use('/users', userRouter);
router.use('/articles', articleRouter);


export default router;
