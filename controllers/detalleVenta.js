const {connection} = require('../database/config')

const getDetTemp = (req, res) => {
    connection.query('SELECT * FROM det_temp', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const addDetTemp = (req, res) => {
    const {nroVenta, idProducto, cantidad} = req.body
    let cantAntigua = 0
    connection.query(`SELECT cantidad FROM detalle_temporal WHERE idProducto = ${idProducto}`, (error, results) => {
        if(error) throw error
        if(results.length === 0){
            connection.query(`INSERT INTO detalle_temporal(nroVenta, idProducto, cantidad) 
                              VALUES(${nroVenta}, ${idProducto}, ${cantidad})`
            ,(error, results) => {
                if(error) throw error
                res.send(results)
            })
        } else {
            cantAntigua = results[0].cantidad
            connection.query(`UPDATE detalle_temporal SET cantidad=${+cantAntigua + +cantidad} WHERE idProducto = ${idProducto}`,(error, results) => {
                if(error) throw error
                res.send(results)
            })
        }
    })
}

const delDetTemp = (req, res) => {
    const idProducto = req.params.id
    connection.query(`DELETE FROM detalle_temporal WHERE idProducto = ${idProducto}`, (error, results) => {
        if(error) throw error
        res.send(results)
    })
}

const delTableDetTemp = (req, res) => {
    connection.query('DELETE FROM detalle_temporal' ,(error, results) => {
        if(error) throw error
        res.send(results)
    })
}

const updTableDetTemp = (req, res) => {
    const nroVenta = req.params.id 
    connection.query(`INSERT INTO detalle_temporal(nroVenta, idProducto, cantidad)
                      SELECT nroVenta, idProducto, cantidad FROM detalle_ventas 
                      WHERE nroVenta=${nroVenta}
    `, (error, results) => {
        if(error) throw error
        res.send(results)

    })
}

module.exports = {getDetTemp, addDetTemp, delDetTemp, delTableDetTemp, updTableDetTemp}