import express from 'express';
import { studentCon } from '../controllers/studentCon.js';
import myLogger from '../middlewares/logger-middleware.js';


const router = express.Router();

// Router level middleware
// router.use(myLogger);

// path based
router.use('/student', myLogger);

router.get('/student', studentCon);
router.get('/event', (req, res)=>{
    res.send('students events')
});


export default router;