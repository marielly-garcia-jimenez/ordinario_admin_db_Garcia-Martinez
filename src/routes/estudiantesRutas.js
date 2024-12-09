const express = require('express');
const router = express.Router();
const { getEstudiantes, CreateEstudiante } = require('../controllers/estudiantesControlador');

router.get('/', getEstudiantes);
router.post('/', CreateEstudiante);

module.exports = router;