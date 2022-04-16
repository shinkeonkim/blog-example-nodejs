import { Router } from 'express';
import userRouter from './user';
import articleRouter from './article';
import fs from 'fs';

const router = Router();

router.get('/', function(request, response) { 	
	fs.readFile('src/index.html', function (error, data) {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end(data);
  });	
});

router.use('/users', userRouter);
router.use('/articles', articleRouter);


export default router;
