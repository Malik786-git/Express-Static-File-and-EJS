import express from "express";
import { homeCon } from "../controllers/homeCon.js";

const router = express.Router();

router.get('/', homeCon);


export default router;