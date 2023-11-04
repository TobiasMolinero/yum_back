import { pool } from '../db.js'

const getLastNroVenta = (req, res) => {
    pool.query(`SELECT MAX(nroVenta) 'nroVenta' FROM ventas`, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const getVentas = (req, res) => {
    let idZonaVenta = req.params.id
    pool.query(`SELECT * FROM tabla_ventas WHERE idZonaVenta = ${idZonaVenta}`, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const addVenta = (req, res) => {
    let {nroVenta, fecha, cliente, empleado, zonaVenta, metodo, obs, importeTotal} = req.body
    if(obs === undefined){
        obs = '-'
    }
    pool.query(`INSERT INTO ventas(nroVenta, fecha, idCliente, idEmpleado, idZonaVenta, idMetodoPago, observaciones, totalVenta)
                      VALUES(${nroVenta}, '${fecha}', ${cliente}, ${empleado}, ${zonaVenta}, ${metodo}, '${obs}', ${importeTotal})
    `, (error, results) => {
        if(error)throw error
    })

    pool.query(`INSERT INTO detalle_ventas(nroVenta, idProducto, cantidad)
                      SELECT nroVenta, idProducto, cantidad FROM detalle_temporal
    `, (error, results) => {
        if(error) throw error
        res.send(results)
    })
}

const delVenta = (req, res) => {
    nroVenta = req.params.id
    pool.query(`DELETE FROM detalle_ventas WHERE nroVenta = ${nroVenta}`, (error, results) => {
        if(error) throw error
    })

    pool.query(`DELETE FROM ventas WHERE nroVenta = ${nroVenta}`, (error, results) => {
        if(error) throw error
        res.send('Se eliminó con exito')
    })
}

const getOneVenta = (req, res) => {
    const nroVenta = req.params.id
    pool.query(`SELECT * FROM ventas WHERE nroVenta = ${nroVenta}`, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const modVenta = (req, res) => {
    const nroVenta = req.params.id
    let {fecha, cliente, empleado, zonaVenta, metodo, obs, importeTotal} = req.body
    if(obs === undefined || obs === ''){
        obs = '-'
    }
    pool.query(`UPDATE ventas SET fecha = '${fecha}',
                      idCliente = ${cliente},
                      idEmpleado = ${empleado},
                      idZonaVenta = ${zonaVenta},
                      idMetodoPago = ${metodo},
                      observaciones = '${obs}',
                      totalVenta = ${importeTotal}
                      WHERE nroVenta = ${nroVenta}
    `, (error, results) => {
        if(error) throw error
    })

    pool.query(`DELETE FROM detalle_ventas WHERE nroVenta = ${nroVenta}`, (error, results) => {
        if(error)throw error
    })

    pool.query(`INSERT INTO detalle_ventas(nroVenta, idProducto, cantidad)
                      SELECT nroVenta, idProducto, cantidad FROM detalle_temporal
                      WHERE nroVenta = ${nroVenta}
    `, (error, results) => {
        if(error)throw error
        res.send(results)
    })
}

const getVentaConDetalle = (req, res) => {
    const nroVenta = req.params.id
    pool.query(`SELECT * FROM tabla_ventas
                      WHERE nroVenta = ${nroVenta}
    `, (error, results) => {
        if(error) throw error 
        res.json(results)
    })
}

export default {getLastNroVenta, getVentas, addVenta, delVenta, getOneVenta, modVenta, getVentaConDetalle}