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
router.get('/gastos/one/:id', one)
router.post('/gastos/agregar', registrarGasto)
router.put('/gastos/editar/:id', editarGasto)
router.delete('/gastos/borrar/:id', eliminarGasto)

router.get('/gastos/filtrar/:id', filtrar)

module.exports = router