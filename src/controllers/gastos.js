import { pool } from "../db.js";

export const allGastos = (req, res) => {
  pool.query("SELECT * FROM datos_gastos ORDER BY fecha DESC", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

export const one = (req, res) => {
  const id = req.params.id;
  pool.query(
    `SELECT * FROM gastos_varios WHERE idGasto = ${id}`,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

export const registrarGasto = (req, res) => {
  const { descripcion, categoria, fecha, importe } = req.body;
  pool.query(
    `INSERT INTO gastos_varios(descripcion, idCategoriaGasto, fecha, importe)
                      VALUES('${descripcion}', ${categoria}, '${fecha}', ${importe});  
    `,
    (error, results) => {
      if (error) throw error;
      res.send("registro exitoso");
    }
  );
};

export const editarGasto = (req, res) => {
  const id = req.params.id;
  const { descripcion, categoria, fecha, importe } = req.body;
  pool.query(
    `UPDATE gastos_varios 
                      SET descripcion = '${descripcion}',
                      idCategoriaGasto = ${categoria},
                      fecha = '${fecha}',
                      importe = ${importe}
                      WHERE idGasto = ${id}  
`,
    (error, results) => {
      if (error) throw error;
      res.send("Se modificó con exito");
    }
  );
};

export const eliminarGasto = (req, res) => {
  const id = req.params.id;
  pool.query(
    `DELETE FROM gastos_varios WHERE idGasto = ${id}`,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

export const filtrar = (req, res) => {
  const valorMes = req.params.id
  const date = new Date();
  const año = date.getFullYear();
  let fechaUno = "";
  let fechaDos = "";

  switch (valorMes) {
    case '1': //Enero
      fechaUno = `${año}-01-01`;
      fechaDos = `${año}-01-31`;
      break;

    case '2': //Febrero
      fechaUno = `${año}-02-01`;
      fechaDos = `${año}-02-30`;
      break;

    case '3': //Marzo
      fechaUno = `${año}-03-01`;
      fechaDos = `${año}-03-31`;
      break;
      
    case '4': //Abril
      fechaUno = `${año}-04-01`;
      fechaDos = `${año}-04-31`;
      break;

    case '5': //Mayo
      fechaUno = `${año}-05-01`;
      fechaDos = `${año}-05-31`;
      break;

    case '6': //Junio
      fechaUno = `${año}-06-01`;
      fechaDos = `${año}-06-31`;
      break;

    case '7': //Julio
      fechaUno = `${año}-07-01`;
      fechaDos = `${año}-07-31`;
      break;

    case '8': //Agosto
      fechaUno = `${año}-08-01`;
      fechaDos = `${año}-08-31`;
      break;

    case '9': //Septiembre
      fechaUno = `${año}-09-01`;
      fechaDos = `${año}-09-31`;
      break;

    case '10': //Octubre
      fechaUno = `${año}-10-01`;
      fechaDos = `${año}-10-31`;
      break;

    case '11': //Noviembre
      fechaUno = `${año}-11-01`;
      fechaDos = `${año}-11-30`;
      break;

    case '12': //Diciembre
      fechaUno = `${año}-12-01`;
      fechaDos = `${año}-12-31`;
      break;
    default:
      break;
  }
  pool.query(
    `SELECT * FROM datos_gastos
     WHERE fecha BETWEEN '${fechaUno}' AND '${fechaDos}'

  `,(error, results) => {
      if (error) throw error
      res.json(results)
    }
  )
};

