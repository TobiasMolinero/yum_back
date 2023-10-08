const {Router} = require('express')
const router = Router()
const {getEmpleados} = require('../controllers/empleados')

router.get('/empleados', getEmpleados)

module.exports = router