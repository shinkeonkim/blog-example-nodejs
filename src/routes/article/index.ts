import { Router } from 'express';
import { articleIndex, articleNew } from './article.controller';

const router = Router();

router.get('/', articleIndex);
router.post('/', articleNew);

export default router;
