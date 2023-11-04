import { Router } from 'express'
const router = Router()
import { getClientes, addCliente, editCliente, oneCliente, bajaCliente } from '../controllers/clientes'

router.get('/clientes', getClientes)
router.get('/clientes/:id', oneCliente)
router.post('/clientes/agregar', addCliente)
router.put('/clientes/editar/:id', editCliente)
router.delete('/clientes/delete/:id', bajaCliente)

export default router