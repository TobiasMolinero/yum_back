const {Router} = require('express')
const router = Router()
const {getZonas} = require('../controllers/zonas')

router.get('/zonas', getZonas)


module.exports = router