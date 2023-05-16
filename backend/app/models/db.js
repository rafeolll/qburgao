const mysql = require("mysql");
const dbconfig = require("../configs/db.config");

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB,
    port: dbconfig.PORT
});

connection.connect(error=>{
    if (error) throw error;
    console.log("Banco de Dados Conectado!");
});

module.exports = connection;