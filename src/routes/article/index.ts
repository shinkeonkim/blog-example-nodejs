import { Router } from 'express';
import { articles } from './article.controller';

const router = Router();

router.get('/', articles);

export default router;
