
const express = require('express');
const router = express.Router();

const estudiantesRutas = require('./estudiantesRutas');
const calificaciones = require('./calificacionesRutas');

router.use('/estudiantes', estudiantesRutas);
router.use('/calificaciones', calificaciones);


module.exports = router;