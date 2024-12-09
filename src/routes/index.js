const express = require('express');
const router = express.Router();

const estudiantesRutas = require('./estudiantesRutas');
const calificacionesRutas = require('./calificacionesRutas');
const materiaRutas = require('./materiasRutas');
const maestrosRutas = require('./maestrosRutas');

router.use('/estudiantes', estudiantesRutas);
router.use('/calificaciones', calificacionesRutas);
router.use('/materias', materiaRutas);
router.use('/maestros', maestrosRutas)


module.exports = router;
