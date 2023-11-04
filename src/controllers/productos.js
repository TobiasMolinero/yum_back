import { pool } from '../db.js'

export const getProductos = (req, res) => {
    pool.query('SELECT idProducto, nombreProducto, precioMenor, precioMayor FROM productos', (error, results) => {
        if(error)throw error
        res.json(results)
    })
}
