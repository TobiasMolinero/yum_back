const {Router} = require('express')
const router = Router()
const {getGananciasDelMes, getPerdidasDelMes} = require('../controllers/inicio')

router.get('/inicio/ganancias', getGananciasDelMes)
router.get('/inicio/perdidas', getPerdidasDelMes)

module.exports = router