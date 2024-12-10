const con = require('../config/database');

const getData = (tabla, res) => {

    const query = `SELECT * FROM ??`; 

    con.query(query, [tabla], (err, results) => {
        if(err)
        {
            console.log('No pude ejecutar el query: ', err);
            return res.status(500).json({ error: 'El query a la db falló'})
        }

        return res.json(results);
    });
}

const sendData = (query, values, res) => {
    con.query(query, values, (err, results) => {
        if(err)
        {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({ message: 'Se creo el elemento. ', id: results.insertId })
    });
}

const getID = (table, field, value) => {
    return new Promise( (resolve, reject) => {
        const query = `SELECT id FROM ?? WHERE ?? = ? LIMIT 1`;

        con.query(query, [table, field, value], (err, results) => {
            if(err)
            {
                return reject(new Error('No se pudo completar query: ' + err));
            }

            if(results.length === 0)
            {
                return reject(new Error('No se encontro registro con los datos dados.'));
            }

            resolve(results[0].id);
        })
    });
}

module.exports = { getData, sendData, getID };