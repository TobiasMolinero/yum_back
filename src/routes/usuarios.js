const {Router} = require('express')
const router = Router()
const {login} = require('../controllers/usuarios')

router.post('/usuarios/login', login)

module.exports = router