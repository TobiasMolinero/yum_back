const {connection} = require('../database/config')

const getEstadosPedido = (req, res) => {
    connection.query('SELECT idEstadoPedido, descEstado FROM estados_pedido', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

module.exports = {getEstadosPedido}