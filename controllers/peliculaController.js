const PeliculaService = require('../services/peliculaService');

class PeliculaController {
  async getAllPeliculas(req, res) {
    const peliculas = await PeliculaService.getAllPeliculas();
    res.json(peliculas);
  }

  async getPeliculaById(req, res) {
    const pelicula = await PeliculaService.getPeliculaById(req.params.id);
    if (pelicula) {
      res.json(pelicula);
    } else {
      res.status(404).json({ message: 'Película no encontrada' });
    }
  }

  async createPelicula(req, res) {
    const pelicula = await PeliculaService.createPelicula(req.body);
    res.status(201).json(pelicula);
  }

  async updatePelicula(req, res) {
    const pelicula = await PeliculaService.updatePelicula(req.params.id, req.body);
    res.json(pelicula);
  }

  async deletePelicula(req, res) {
    await PeliculaService.deletePelicula(req.params.id);
    res.status(204).end();
  }
}

module.exports = new PeliculaController();
