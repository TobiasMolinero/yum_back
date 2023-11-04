const express = require('express')
const logger = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')

//IMPORTAMOS RUTAS
const indexRoute = require('./routes/index.routes')
const ventas = require('./routes/ventas')
const usuarios = require('./routes/usuarios')
const gastos = require('./routes/gastos')
const catGastos = require('./routes/catGastos')
const zonas = require('./routes/zonas')
const formaPago = require('./routes/formaPago')
const estadosPedido = require('./routes/estadosPedido')
const productos = require('./routes/productos')
const clientes = require('./routes/clientes')
const empleados = require('./routes/empleados')
const detalleVenta = require('./routes/detalleVenta')
const inicio = require('./routes/inicio')

// MIDDLEWARES
const app = express()
app.use(bodyParser.json())
app.use(compression())
app.use(logger('dev'))
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