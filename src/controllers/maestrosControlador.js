const { getData, sendData } = require('../helpers/dbHelpers');

const getMaestros = (req, res) => {
    getData('maestros', res);
};


const createMaestro = (req, res) => {
    const { nombre, edad, telefono, correo, usuario_creacion } = req.body;

    
    if (!nombre || !edad || !telefono || !correo || !usuario_creacion) {
        return res.status(400).json({ error: 'Faltan datos obligatorios.' });
    }

    if (isNaN(edad) || edad <= 0) {
        return res.status(400).json({ error: 'La edad debe ser un número válido mayor a 0.' });
    }

    if (!/^\d{10,15}$/.test(telefono)) {
        return res.status(400).json({ error: 'El teléfono debe ser un número válido entre 10 y 15 dígitos.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        return res.status(400).json({ error: 'El formato del correo electrónico no es válido.' });
    }

    if (nombre.length > 255 || correo.length > 255 || usuario_creacion.length > 100) {
        return res.status(400).json({ error: 'Uno o más campos exceden el límite de caracteres.' });
    }

    // Generar fecha de creación
    const fecha_creacion = new Date().toISOString().replace('T', ' ').slice(0, 19);

    // Query para insertar un nuevo maestro
    const query = `
        INSERT INTO maestros 
        (nombre, edad, telefono, correo, usuario_creacion, fecha_creacion) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const values = [nombre, edad, telefono, correo, usuario_creacion, fecha_creacion];

    sendData(query, values, res);
};

module.exports = { getMaestros, createMaestro };
