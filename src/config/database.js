const mysql = require('mysql2');

const con = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect((err) => {
    if(err)
    {
        console.error('no me pude a la base de datos', err.stack);
        process.exit(1);
    }
    
    console.log('conectado a la base de datos');
});

module.exports = con