import { pool } from '../db.js'

export const getEstadosPedido = (req, res) => {
    pool.query('SELECT idEstadoPedido, descEstado FROM estados_pedido', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}
