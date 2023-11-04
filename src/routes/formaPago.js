import { Router } from 'express'
const router = Router()
import { getFormas } from '../controllers/formaPago.js'

router.get('/formaPago', getFormas)

export default router