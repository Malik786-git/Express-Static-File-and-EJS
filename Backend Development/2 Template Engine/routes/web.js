import express from 'express';

import { homeCon } from '../controllers/homeCon.js';
import { aboutCon } from '../controllers/aboutCon.js';
const router = express.Router();


router.get('/', homeCon);
router.get('/about', aboutCon);


export default router;