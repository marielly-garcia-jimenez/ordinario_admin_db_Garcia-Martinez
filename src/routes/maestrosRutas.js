const express = require('express');
const router = express.Router();
const { getMaestros, createMaestro} = require('../controllers/maestrosControlador');

router.get('/', getMaestros);
router.post('/', createMaestro);

module.exports = router;