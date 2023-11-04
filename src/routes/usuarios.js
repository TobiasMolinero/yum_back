import { Router } from 'express'
const router = Router()
import { login } from '../controllers/usuarios'

router.post('/usuarios/login', login)

export default router