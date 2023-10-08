const {connection} = require('../database/config')

const getClientes = (req, res) => {
    connection.query('SELECT * FROM clientes', (error, results) => {
        if(error) throw error 
        res.json(results)
    })
}

module.exports = {getClientes}