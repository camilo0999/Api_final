const express = require('express');
const ComidaController = require('../controllers/comidaController');
const router = express.Router();

router.get('/comidas', ComidaController.getAllComidas);
router.get('/comidas/:id', ComidaController.getComidaById);
router.post('/comidas', ComidaController.createComida);
router.put('/comidas/:id', ComidaController.updateComida);
router.delete('/comidas/:id', ComidaController.deleteComida);

module.exports = router;
