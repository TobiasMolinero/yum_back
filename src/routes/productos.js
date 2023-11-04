import { Router } from 'express'
const router = Router()
import { getProductos } from '../controllers/productos.js'

router.get('/productos', getProductos)

export default router