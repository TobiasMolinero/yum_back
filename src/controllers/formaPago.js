import { pool } from '../db.js'

const getFormas = (req, res) => {
    pool.query('SELECT idMetodoPago, metodo FROM metodos_de_pago', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

export default {getFormas}