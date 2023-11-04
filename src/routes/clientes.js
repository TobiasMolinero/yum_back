const {Router} = require('express')
const router = Router()
const {getClientes, addCliente, editCliente, oneCliente, bajaCliente} = require('../controllers/clientes')

router.get('/clientes', getClientes)
router.get('/clientes/:id', oneCliente)
router.post('/clientes/agregar', addCliente)
router.put('/clientes/editar/:id', editCliente)
router.delete('/clientes/delete/:id', bajaCliente)

module.exports = router