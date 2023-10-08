const {Router} = require('express')
const router = Router()
const {getLastNroVenta, addVenta, getVentas, delVenta} = require('../controllers/ventas')

router.get('/ventas/:id', getVentas)
router.get('/ventas/nroVenta', getLastNroVenta)
router.post('/ventas/add', addVenta)
router.delete('/ventas/delete/:id', delVenta)

module.exports = router