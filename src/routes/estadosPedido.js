const {Router} = require('express')
const router = Router()
const { getEstadosPedido} = require('../controllers/estadosPedido').default

router.get('/estadosPedido', getEstadosPedido)

module.exports = router