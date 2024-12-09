const express = require('express');
const router = express.Router();
const { getCalificaciones, createCalificacion } = require('../controllers/calificacionesControlador');

router.get('/', getCalificaciones);
router.post('/', createCalificacion);

module.exports = router;