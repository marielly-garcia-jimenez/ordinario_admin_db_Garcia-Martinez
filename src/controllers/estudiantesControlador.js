const { getData, sendData } = require('../helpers/dbHelpers');

const getEstudiantes = (req, res) => {
    getData('estudiantes', res);
}

const CreateEstudiante = (req, res) => {
    const { nombre, apellidos, email, matricula, edad, semestre, usuario_creacion } = req.body;

    if(!nombre || !apellidos || !email || !matricula || !edad || !semestre || !usuario_creacion)
    {
        return res.status(400).json({error: 'faltan datos.'});
       
    }
    if(isNaN(edad))
    {
        return res.status(400).json({ error: 'La edad debe ser numerica.'});
    }
    
    const fecha_creacion = new Date().toUSIString().slice(0,19,replace('T', ''));

    const query = 'INSERT INTO estudiantes (nombre, apellidos, email, matricula, edad, semestre, usuario_creacion, fecha_creacion) Values (?,?,?,?,?,?,?,?)';

    const values = [ nombre, apellidos, email, matricula, edad, semestre, usuario_creacion, fecha_creacion ];

    sendData(query, values, res);
}

module.exports = { getEstudiantes, CreateEstudiante}