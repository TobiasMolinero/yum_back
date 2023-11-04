import { Router } from "express";
const router = Router()
import {index} from '../controllers/index.controllers.js'

router.get('/', index)

module.exports = router