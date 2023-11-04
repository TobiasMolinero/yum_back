const {Router} = require('express')
const router = Router()
const {getFormas} = require('../controllers/formaPago')

router.get('/formaPago', getFormas)

module.exports = router