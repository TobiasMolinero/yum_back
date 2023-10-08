const { connection } = require("../database/config");

const allGastos = (req, res) => {
  connection.query("SELECT * FROM gastos", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

const one = (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM gastos_varios WHERE idGasto = ${id}`,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const registrarGasto = (req, res) => {
  const { descripcion, categoria, fecha, importe } = req.body;
  console.log(fecha);
  connection.query(
    `INSERT INTO gastos_varios(descripcion, idCategoriaGasto, fecha, importe)
                      VALUES('${descripcion}', ${categoria}, '${fecha}', ${importe});  
    `,
    (error, results) => {
      if (error) throw error;
      res.send("registro exitoso");
    }
  );
};

const editarGasto = (req, res) => {
  const id = req.params.id;
  const { descripcion, categoria, fecha, importe } = req.body;
  connection.query(
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

const eliminarGasto = (req, res) => {
  const id = req.params.id;
  connection.query(
    `DELETE FROM gastos_varios WHERE idGasto = ${id}`,
    (error, results) => {
      if (error) throw error;
      res.json(results);
    }
  );
};

const filtrar = (req, res) => {
  const { valorMes } = req.body;
  const date = new Date();
  const año = date.getFullYear();
  let fechaUno = "";
  let fechaDos = "";

  switch (valorMes) {
    case '1': //Mayo
      fechaUno = `${año}-05-01`;
      fechaDos = `${año}-05-31`;
      break;

    case '2': //Junio
      fechaUno = `${año}-06-01`;
      fechaDos = `${año}-06-30`;
      break;

    case '3': //Julio
      fechaUno = `${año}-07-01`;
      fechaDos = `${año}-07-31`;
      break;
    case '4': //Agosto
      fechaUno = `${año}-08-01`;
      fechaDos = `${año}-08-31`;
      break;
    default:
      break;
  }

  connection.query(
    `SELECT * FROM gastos
     WHERE fecha BETWEEN('${fechaUno}') AND ('${fechaDos}')

      `,(error, results) => {
      if (error) throw error;
      if(results.length === 0){
        return res.json(0)
      }
      return res.json(results);
    }
  )
};

module.exports = {
  allGastos,
  one,
  registrarGasto,
  editarGasto,
  eliminarGasto,
  filtrar,
};
