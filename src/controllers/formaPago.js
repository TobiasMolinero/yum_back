import { pool } from '../db.js'

export const getFormas = (req, res) => {
    pool.query('SELECT idMetodoPago, metodo FROM metodos_de_pago', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}
