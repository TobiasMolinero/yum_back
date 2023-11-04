import { Router } from "express";
const router = Router()
import {index} from '../controllers/index.controllers.js'

router.get('/', index)

export default router