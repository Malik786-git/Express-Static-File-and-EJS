import express from 'express';
const router = express.Router();
import { homeCon } from '../controllers/homeCon.js';

router.get('/', homeCon);


export default router;