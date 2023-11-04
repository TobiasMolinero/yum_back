import { Router } from 'express'
const router = Router()
import { getEmpleados } from '../controllers/empleados.js'

router.get('/empleados', getEmpleados)

export default router