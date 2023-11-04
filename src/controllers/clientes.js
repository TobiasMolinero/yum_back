const {pool} = require('../db.js')

const getClientes = (req, res) => {
    pool.query('SELECT * FROM clientes WHERE estado = 1', (error, results) => {
        if(error) throw error 
        res.json(results)
    })
}

const oneCliente = (req, res) => {
    const idCliente = req.params.id
    pool.query(`SELECT * FROM clientes WHERE idCliente = ${idCliente}`, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const addCliente = (req, res) => {
    const {nombre, domicilio, telefono} = req.body
    pool.query(`INSERT INTO clientes(nombreCliente, domicilio, telefono)
                      VALUES('${nombre}', '${domicilio}', '${telefono}')
    `, (error, results) => {
        if(error) throw error
        res.send('Agregado con exito.')
    })
}

const editCliente = (req, res) => {
    const idCliente = req.params.id
    const {nombre, domicilio, telefono} = req.body
    pool.query(`UPDATE clientes SET 
                      nombreCliente = '${nombre}',
                      domicilio = '${domicilio}',
                      telefono = '${telefono}'
                      WHERE idCliente = ${idCliente}
    `, (error, results) => {
        if(error) throw error
        res.send('Modificado con exito.')
    })
}

const bajaCliente = (req, res) => {
    const idCliente = req.params.id
    pool.query(`UPDATE clientes SET estado = 0 WHERE idCliente = ${idCliente}`, (error, results) => {
        if(error) throw error
        res.send('El cliente se dio de baja con exito.')
    })
}

module.exports = {getClientes, addCliente, editCliente, oneCliente, bajaCliente}