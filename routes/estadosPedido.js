const {Router} = require('express')
const router = Router()
const { getEstadosPedido} = require('../controllers/estadosPedido')

router.get('/estadosPedido', getEstadosPedido)

module.exports = router