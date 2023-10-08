const {connection} = require('../database/config')

const getCatGastos = (req, res) => {
    connection.query('SELECT * FROM categorias_gastos', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const addCatGasto = (req, res) => {
    const {descripcion} = req.body
    connection.query(`INSERT INTO categorias_gastos(descripcion)
                       VALUES('${descripcion}')
    `, (error, results) => {
        if(error) throw error
        res.send('Se creó con exito')
    })
}

module.exports = {getCatGastos, addCatGasto}