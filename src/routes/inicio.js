import { Router } from 'express'
const router = Router()
import { getGananciasDelMes, getPerdidasDelMes } from '../controllers/inicio'

router.get('/inicio/ganancias', getGananciasDelMes)
router.get('/inicio/perdidas', getPerdidasDelMes)

export default router