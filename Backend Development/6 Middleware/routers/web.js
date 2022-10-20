import express from 'express';
import { homeCon } from '../controllers/homeCon.js';
import { aboutCon } from '../controllers/aboutCon.js';


const router = express.Router();



router.get('/', homeCon)
router.get('/about', aboutCon)
router.get('/about/12',(req, res)=>{
    res.send('also run middleware')
})

export default router;