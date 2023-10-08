const {connection} = require('../database/config')

const getZonas = (req, res) => {
    connection.query('SELECT idZonaVenta, zona FROM zonas_de_venta', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

module.exports = {getZonas}