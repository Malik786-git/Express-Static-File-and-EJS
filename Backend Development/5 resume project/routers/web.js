import express from 'express';
import { contactCon } from '../controllers/contactCon.js';
import { homeCon } from '../controllers/homeCon.js';
import { serviceCon } from '../controllers/serviceCon.js';
import { skillCon } from '../controllers/skillCon.js';

const router = express.Router();



router.get('/', homeCon);

router.get('/services', serviceCon);

router.get('/skills', skillCon);

router.get('/contact', contactCon);


export default router;