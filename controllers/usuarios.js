const {connection} = require('../database/config')

const login = (req, res) => {

    const {nombreUsuario, contraseña} = req.body

    connection.query(`SELECT tipoCuenta FROM usuarios 
                      WHERE nombreUsuario = '${nombreUsuario}' AND contraseña = '${contraseña}'
    `,(error, results) => {
        if(error) throw error
        if(results.length === 0){
            res.json(0)
        } else {
            res.json(results)
        }
    })
}


module.exports = {login}