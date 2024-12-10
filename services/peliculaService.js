const Pelicula = require('../models/Pelicula');

class PeliculaService {
  async getAllPeliculas() {
    return await Pelicula.findAll();
  }

  async getPeliculaById(id) {
    return await Pelicula.findByPk(id);
  }

  async createPelicula(peliculaData) {
    return await Pelicula.create(peliculaData);
  }

  async updatePelicula(id, peliculaData) {
    await Pelicula.update(peliculaData, { where: { PeliculaID: id } });
    return await Pelicula.findByPk(id);
  }

  async deletePelicula(id) {
    await Pelicula.destroy({ where: { PeliculaID: id } });
  }
}

module.exports = new PeliculaService();
