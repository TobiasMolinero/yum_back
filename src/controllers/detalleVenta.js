import { pool } from '../db.js'

export const getDetTemp = (req, res) => {
    pool.query('SELECT * FROM det_temp', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

export const addDetTemp = (req, res) => {
    const {nroVenta, idProducto, cantidad} = req.body
    let cantAntigua = 0
    pool.query(`SELECT cantidad FROM detalle_temporal WHERE idProducto = ${idProducto}`, (error, results) => {
        if(error) throw error
        if(results.length === 0){
            pool.query(`INSERT INTO detalle_temporal(nroVenta, idProducto, cantidad) 
                              VALUES(${nroVenta}, ${idProducto}, ${cantidad})`
            ,(error, results) => {
                if(error) throw error
                res.send(results)
            })
        } else {
            cantAntigua = results[0].cantidad
            pool.query(`UPDATE detalle_temporal SET cantidad=${+cantAntigua + +cantidad} WHERE idProducto = ${idProducto}`,(error, results) => {
                if(error) throw error
                res.send(results)
            })
        }
    })
}

export const delDetTemp = (req, res) => {
    const idProducto = req.params.id
    pool.query(`DELETE FROM detalle_temporal WHERE idProducto = ${idProducto}`, (error, results) => {
        if(error) throw error
        res.send(results)
    })
}

export const delTableDetTemp = (req, res) => {
    pool.query('DELETE FROM detalle_temporal' ,(error, results) => {
        if(error) throw error
        res.send(results)
    })
}

export const updTableDetTemp = (req, res) => {
    const nroVenta = req.params.id 
    pool.query(`INSERT INTO detalle_temporal(nroVenta, idProducto, cantidad)
                      SELECT nroVenta, idProducto, cantidad FROM detalle_ventas 
                      WHERE nroVenta=${nroVenta}
    `, (error, results) => {
        if(error) throw error
        res.send(results)

    })
}

export const getDetalle = (req, res) => {
    const nroVenta = req.params.id
    pool.query(`SELECT * FROM det_vta
                      WHERE nroVenta = ${nroVenta}
    `, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}
