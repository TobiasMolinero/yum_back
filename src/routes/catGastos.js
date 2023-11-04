import { Router } from 'express'
const router = Router()
import { getCatGastos, addCatGasto, borrarCatGasto, oneCatGasto, editarCatGasto } from '../controllers/catGastos'

router.get('/catgastos', getCatGastos)
router.get('/catgastos/one/:id', oneCatGasto)
router.post('/catgastos/agregar', addCatGasto)
router.put('/catgastos/editar/:id', editarCatGasto)
router.put('/catgastos/borrar/:id', borrarCatGasto)

export default router