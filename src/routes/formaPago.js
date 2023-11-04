import { Router } from 'express'
const router = Router()
import { getFormas } from '../controllers/formaPago'

router.get('/formaPago', getFormas)

export default router