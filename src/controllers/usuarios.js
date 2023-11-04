import { pool } from '../db.js'

export const login = (req, res) => {

    const {nombreUsuario, contraseña} = req.body

    pool.query(`SELECT tipoCuenta FROM usuarios 
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

