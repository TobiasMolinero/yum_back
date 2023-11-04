import { pool } from '../db.js'

export const getEmpleados = (req, res) => {
    pool.query('SELECT idEmpleado, nombreEmpleado FROM empleados', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}
