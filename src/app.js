import express from "express";
import morgan from "morgan";
import compression from "compression";
import bodyParser from "body-parser";
import cors from 'cors'

//IMPORTAMOS RUTAS

import indexRoute from './routes/index.routes.js'
import ventas from './routes/ventas.js'
import usuarios from './routes/usuarios.js'
import gastos from './routes/gastos.js'
import catGastos from './routes/catGastos.js'
import zonas from './routes/zonas.js'
import formaPago from './routes/formaPago.js'
import estadosPedido from './routes/estadosPedido.js'
import productos from './routes/productos.js'
import clientes from './routes/clientes.js'
import empleados from './routes/empleados.js'
import detalleVenta from './routes/detalleVenta.js'
import inicio from './routes/inicio.js'



// const indexRoute = require('./routes/index.routes').default
// const ventas = require('./routes/ventas').default
// const usuarios = require('./routes/usuarios').default
// const gastos = require('./routes/gastos').default
// const catGastos = require('./routes/catGastos').default
// const zonas = require('./routes/zonas').default
// const formaPago = require('./routes/formaPago').default
// const estadosPedido = require('./routes/estadosPedido').default
// const productos = require('./routes/productos').default
// const clientes = require('./routes/clientes').default
// const empleados = require('./routes/empleados').default
// const detalleVenta = require('./routes/detalleVenta').default
// const inicio = require('./routes/inicio').default

// MIDDLEWARES
const app = express()
app.use(bodyParser.json())
app.use(compression())
app.use(morgan('dev'))
app.use(cors())

// USAMOS LAS RUTAS
app.use('/', indexRoute)
app.use('/', ventas)
app.use('/', usuarios)
app.use('/', gastos)
app.use('/', catGastos)
app.use('/', zonas)
app.use('/', formaPago)
app.use('/', estadosPedido)
app.use('/', productos)
app.use('/', clientes)
app.use('/', empleados)
app.use('/', detalleVenta)
app.use('/', inicio)

export default app