import {app} from './app.js'
import { PORT } from './config.js'

//SERVIDOR
app.listen( PORT )
app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">El Servidor está Activo</h1>')
})
