const {connection} = require('../database/config')

const getEmpleados = (req, res) => {
    connection.query('SELECT idEmpleado, nombreEmpleado FROM empleados', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

module.exports = {getEmpleados}