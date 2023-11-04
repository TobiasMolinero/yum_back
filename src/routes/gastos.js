import { Router } from 'express'
import { allGastos, registrarGasto, editarGasto, eliminarGasto, one, filtrar } from '../controllers/gastos'
const router = Router()

router.get('/gastos', allGastos)
router.get('/gastos/one/:id', one)
router.post('/gastos/agregar', registrarGasto)
router.put('/gastos/editar/:id', editarGasto)
router.delete('/gastos/borrar/:id', eliminarGasto)

router.get('/gastos/filtrar/:id', filtrar)

export default router