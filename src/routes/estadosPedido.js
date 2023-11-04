import { Router } from 'express'
const router = Router()
import { getEstadosPedido } from '../controllers/estadosPedido.js'

router.get('/estadosPedido', getEstadosPedido)

export default router