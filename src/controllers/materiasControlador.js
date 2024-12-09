const { getData, sendData, getID } = require('../helpers/dbHelpers');


const getMaterias = (req, res) => {
  getData('materias', res);
};


const createMateria = (req, res) => {
  const { nombre, profesor_id, create_user } = req.body;

  if (!nombre || !profesor_id || !create_user) {
    return res.status(400).json({ error: 'Faltan datos.' });
  }

  const create_date = new Date().toISOString().slice(0, 19).replace('T', ' ');

  const query = 'INSERT INTO materias (nombre, profesor_id, create_user, create_date) VALUES (?, ?, ?, ?)';
  const values = [nombre, profesor_id, create_user, create_date];

  sendData(query, values, res);
};

// Obtener una materia por ID (ejemplo)
const getMateriaById = (req, res) => {
  const { id } = req.params;

  const query = 'SELECT * FROM materias WHERE id = ?';
  const values = [id];

  getData(query, values, res);
};

module.exports = { getMaterias, createMateria, getMateriaById };