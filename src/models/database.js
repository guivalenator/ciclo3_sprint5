console.log("Ingreso a database.js")
//Importa paquete mysql
const mysql = require('mysql');

const {promisify} = require('util');

//Accede a archivo que contiene Credeciales para acceder a la base de datos
const {database} = require('./key.js');

const pool = mysql.createPool(database);


//conecta a mysql
pool.getConnection((err,connection)=>{
    //en caso de error
    if(err){
        if(err.code ==='PROTOCOL_CONNECTION_LOST'){
            console.error("SE HA PERDIDO CONEXION CON LA BASE DE DATOS");
        }
        if(err.code ==='ER_CON_CONT_ERROR'){
            console.error("LA BASE DE DATOS TIENE MUCHAS CONEXIONES");
        }
        if(err.code ==='ECONNREFUSED'){
            console.error("LA CONEXION FUE RECHAZADA");
        }
    }
    if (connection) connection.release();
    console.log('SE CONECTO CORRECTAMENTE A LA BASE DE DATOS');
    return;
});


pool.query = promisify(pool.query);


module.exports = pool;

