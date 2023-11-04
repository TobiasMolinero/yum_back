import { pool } from '../db.js'

const getGananciasDelMes = (req, res) => {
    const date = new Date()
    let mes = date.getMonth()
    let año = date.getFullYear()
    let fecha1 = ''
    let fecha2 = ''
    switch (mes) {
        case 0: //ENERO
            fecha1 = `${año}-01-01`
            fecha2 = `${año}-01-31`
            break;
    
        case 1: //FEBRERO
            fecha1 = `${año}-02-01`
            fecha2 = `${año}-02-29`
            break;
    
        case 2: //MARZO
            fecha1 = `${año}-03-01`
            fecha2 = `${año}-03-31`
            break;
    
        case 3: //ABRIL
            fecha1 = `${año}-04-01`
            fecha2 = `${año}-04-30`
            break;
    
        case 4: //MAYO
            fecha1 = `${año}-05-01`
            fecha2 = `${año}-05-31`
            break;
    
        case 5: //JUNIO
            fecha1 = `${año}-06-01`
            fecha2 = `${año}-06-30`
            break;
    
        case 6: //JULIO
            fecha1 = `${año}-07-01`
            fecha2 = `${año}-07-31`
            break;
    
        case 7: //AGOSTO
            fecha1 = `${año}-08-01`
            fecha2 = `${año}-08-31`
            break;

        case 8: //SEPTIEMBRE
            fecha1 = `${año}-09-01`
            fecha2 = `${año}-09-30`
            break;
    
        case 9: //OCTUBRE
            fecha1 = `${año}-10-01`
            fecha2 = `${año}-10-31`
            break;
    
        case 10: //NOVIEMBRE
            fecha1 = `${año}-11-01`
            fecha2 = `${año}-11-30`
            break;
    
        case 11: //DICIEMBRE
            fecha1 = `${año}-12-01`
            fecha2 = `${año}-12-31`
            break;
    
        default:
            break;
    }
    getGananciasDelMes
    pool.query(`SELECT SUM(totalVenta) 'ganancias' FROM ventas
                      WHERE fecha BETWEEN '${fecha1}' AND '${fecha2}'

    `,(error, results) => {
        if(error) throw error
        res.json(results)
    })
}

const getPerdidasDelMes = (req, res) => {
    const date = new Date()
    let mes = date.getMonth()
    let año = date.getFullYear()
    let fecha1 = ''
    let fecha2 = ''
    switch (mes) {
        case 0: //ENERO
            fecha1 = `${año}-01-01`
            fecha2 = `${año}-01-31`
            break;
    
        case 1: //FEBRERO
            fecha1 = `${año}-02-01`
            fecha2 = `${año}-02-29`
            break;
    
        case 2: //MARZO
            fecha1 = `${año}-03-01`
            fecha2 = `${año}-03-31`
            break;
    
        case 3: //ABRIL
            fecha1 = `${año}-04-01`
            fecha2 = `${año}-04-30`
            break;
    
        case 4: //MAYO
            fecha1 = `${año}-05-01`
            fecha2 = `${año}-05-31`
            break;
    
        case 5: //JUNIO
            fecha1 = `${año}-06-01`
            fecha2 = `${año}-06-30`
            break;
    
        case 6: //JULIO
            fecha1 = `${año}-07-01`
            fecha2 = `${año}-07-31`
            break;
    
        case 7: //AGOSTO
            fecha1 = `${año}-08-01`
            fecha2 = `${año}-08-31`
            break;

        case 8: //SEPTIEMBRE
            fecha1 = `${año}-09-01`
            fecha2 = `${año}-09-30`
            break;
    
        case 9: //OCTUBRE
            fecha1 = `${año}-10-01`
            fecha2 = `${año}-10-31`
            break;
    
        case 10: //NOVIEMBRE
            fecha1 = `${año}-11-01`
            fecha2 = `${año}-11-30`
            break;
    
        case 11: //DICIEMBRE
            fecha1 = `${año}-12-01`
            fecha2 = `${año}-12-31`
            break;
    
        default:
            break;
    }
    pool.query(`SELECT SUM(importe) 'perdidas' FROM gastos_varios
                      WHERE fecha BETWEEN '${fecha1}' AND '${fecha2}'
    `, (error, results) => {
        if(error) throw error
        res.json(results)
    })
}

export default {getGananciasDelMes, getPerdidasDelMes}