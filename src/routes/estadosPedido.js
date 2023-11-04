import { Router } from 'express'
const router = Router()
import { getEstadosPedido } from '../controllers/estadosPedido'

router.get('/estadosPedido', getEstadosPedido)

export default router