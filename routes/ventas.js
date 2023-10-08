const {Router} = require('express')
const router = Router()
const {getLastNroVenta, addVenta, getVentas, delVenta, getOneVenta, modVenta} = require('../controllers/ventas')

router.get('/ventas/ventaZona/:id', getVentas)
router.get('/ventas/lastVenta', getLastNroVenta)
router.get('/ventas/oneVenta/:id', getOneVenta)
router.post('/ventas/add', addVenta)
router.delete('/ventas/delete/:id', delVenta)
router.put('/ventas/update/:id', modVenta)

module.exports = router