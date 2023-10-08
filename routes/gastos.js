const {Router} = require('express')
const router = Router()
const {
    allGastos, 
    registrarGasto, 
    editarGasto, 
    eliminarGasto, 
    one,
    filtrar
} = require('../controllers/gastos')

router.get('/gastos', allGastos)
router.get('/gastos/:id', one)
router.post('/gastos', registrarGasto)
router.put('/gastos/:id', editarGasto)
router.delete('/gastos/:id', eliminarGasto)

router.post('/gastos/filtrar', filtrar)

module.exports = router