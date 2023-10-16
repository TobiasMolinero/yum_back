const {Router} = require('express')
const router = Router()
const { getCatGastos, addCatGasto, borrarCatGasto, oneCatGasto, editarCatGasto } = require('../controllers/catGastos')

router.get('/catgastos', getCatGastos)
router.get('/catgastos/one/:id', oneCatGasto)
router.post('/catgastos/agregar', addCatGasto)
router.put('/catgastos/editar/:id', editarCatGasto)
router.put('/catgastos/borrar/:id', borrarCatGasto)

module.exports = router