const {connection} = require('../database/config')

const getFormas = (req, res) => {
    connection.query('SELECT idMetodoPago, metodo FROM metodos_de_pago', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

module.exports = {getFormas}