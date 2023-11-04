import { pool } from '../db.js'

export const getZonas = (req, res) => {
    pool.query('SELECT idZonaVenta, zona FROM zonas_de_venta', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}
