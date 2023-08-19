import express from 'express';
import {readStudent, readOneStudent} from '../controller/studentController.js';

const router = express();

router.get('/student' , readStudent);
router.get('/student/:id', readOneStudent);

export default router;