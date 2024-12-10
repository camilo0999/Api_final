const express = require('express');
const PeliculaController = require('../controllers/peliculaController');
const router = express.Router();

router.get('/peliculas', PeliculaController.getAllPeliculas);
router.get('/peliculas/:id', PeliculaController.getPeliculaById);
router.post('/peliculas', PeliculaController.createPelicula);
router.put('/peliculas/:id', PeliculaController.updatePelicula);
router.delete('/peliculas/:id', PeliculaController.deletePelicula);

module.exports = router;
