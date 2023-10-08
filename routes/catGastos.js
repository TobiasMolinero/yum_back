const {Router} = require('express')
const router = Router()
const { getCatGastos, addCatGasto } = require('../controllers/catGastos')

router.get('/catgastos', getCatGastos)
router.post('/catgastos', addCatGasto)

module.exports = router