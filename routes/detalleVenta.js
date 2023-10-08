const {Router} = require('express')
const router = Router()
const {getDetTemp, addDetTemp, delDetTemp, delTableDetTemp, updTableDetTemp} = require('../controllers/detalleVenta')

router.get('/detalleVentaTemp', getDetTemp)
router.post('/detalleVentaTemp/add', addDetTemp)
router.delete('/detalleVentaTemp/delete/:id', delDetTemp)
router.delete('/detalleVentaTemp/deleteTable', delTableDetTemp)
router.post('/detalleVentaTemp/updateTable/:id', updTableDetTemp)

module.exports = router