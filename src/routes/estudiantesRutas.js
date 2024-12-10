const express = require('express');
const router = express.Router();
const { getEstudiantes, createEstudiante } = require('../controllers/estudiantesControlador');  

router.get('/', getEstudiantes);
router.post('/', createEstudiante);  

module.exports = router;
