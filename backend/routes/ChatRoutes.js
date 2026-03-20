import express from 'express'
import { chatcontroller } from "../controllers/chatcontroller.js"
const router=express.Router()
router.post('/',chatcontroller)

export default router;