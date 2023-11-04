import { Router } from 'express'
const router = Router()
import { getZonas } from '../controllers/zonas'

router.get('/zonas', getZonas)


export default router