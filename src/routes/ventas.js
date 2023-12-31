import { Router } from 'express'
const router = Router()
import { getLastNroVenta, addVenta, getVentas, delVenta, getOneVenta, modVenta, getVentaConDetalle } from '../controllers/ventas.js'

router.get('/ventas/ventaZona/:id', getVentas)
router.get('/ventas/lastVenta', getLastNroVenta)
router.get('/ventas/oneVenta/:id', getOneVenta)
router.get('/ventas/conDetalle/:id', getVentaConDetalle)
router.post('/ventas/add', addVenta)
router.delete('/ventas/delete/:id', delVenta)
router.put('/ventas/update/:id', modVenta)

export default router