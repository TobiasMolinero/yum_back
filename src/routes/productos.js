const {Router} = require('express')
const router = Router()
const {getProductos} = require('../controllers/productos')

router.get('/productos', getProductos)

module.exports = router