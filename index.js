const express = require('express')
const logger = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser')
const cors = require('cors')
const {connection} = require('./database/config')

// RUTAS
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

// APP
const app = express()
app.use(bodyParser.json())
app.use(compression())
app.use(logger('dev'))
app.use(cors())

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


// VERIFICAR CONEXION A LA BASE DE DATOS
connection.connect(error => {
    if(error)console.log('Ocurrio un error al conectar con la base de datos')
    console.log('Conexion establecida con la DB')
})

//SERVIDOR
app.listen(process.env.PORT || 3000)
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">El Servidor está Activo</h1>')
})
