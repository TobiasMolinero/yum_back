import { Router } from 'express'
const router = Router()
import { getZonas } from '../controllers/zonas.js'

router.get('/zonas', getZonas)


export default router