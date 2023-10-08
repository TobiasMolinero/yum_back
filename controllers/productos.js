const {connection} = require('../database/config')

const getProductos = (req, res) => {
    connection.query('SELECT idProducto, nombreProducto, precioMenor, precioMayor FROM productos', (error, results) => {
        if(error)throw error
        res.json(results)
    })
}


module.exports = {getProductos}