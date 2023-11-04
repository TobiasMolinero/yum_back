import { pool } from '../db.js'

export const getCatGastos = (req, res) => {
    pool.query('SELECT * FROM categorias_gastos WHERE estado = 1', (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

export const oneCatGasto = (req, res) => {
    const idCategoriaGasto = req.params.id
    pool.query(`SELECT * FROM categorias_gastos WHERE idCategoriaGasto = ${idCategoriaGasto}
    `, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

export const addCatGasto = (req, res) => {
    const {categoriaGasto} = req.body
    pool.query(`INSERT INTO categorias_gastos(categoriaGasto)
                       VALUES('${categoriaGasto}')
    `, (error, results) => {
        if(error) throw error
        res.send('Se creó con exito')
    })
}

export const editarCatGasto = (req, res) => {
    const idCategoriaGasto = req.params.id
    const {categoriaGasto} = req.body
    pool.query(`UPDATE categorias_gastos SET categoriaGasto = '${categoriaGasto}'
                      WHERE idCategoriaGasto = ${idCategoriaGasto}
    `, (error, results) => {
        if(error) throw error
        res.send('Se modificó con exito.')
    })
}

export const borrarCatGasto = (req, res) => {
    const idGasto = req.params.id
    pool.query(`UPDATE categorias_gastos SET estado = 0 WHERE idCategoriaGasto = ${idGasto}`, (error, results) => {
        if(error) throw error
        res.send('Se borró con exito')
    })
}
