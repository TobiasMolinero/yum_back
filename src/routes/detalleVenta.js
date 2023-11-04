import { Router } from 'express'
const router = Router()
import { getDetTemp, addDetTemp, delDetTemp, delTableDetTemp, updTableDetTemp, getDetalle } from '../controllers/detalleVenta.js'

router.get('/detalleVentaTemp', getDetTemp)
router.post('/detalleVentaTemp/add', addDetTemp)
router.delete('/detalleVentaTemp/delete/:id', delDetTemp)
router.delete('/detalleVentaTemp/deleteTable', delTableDetTemp)
router.post('/detalleVentaTemp/updateTable/:id', updTableDetTemp)

router.get('/detalleVenta/:id', getDetalle)

export default router