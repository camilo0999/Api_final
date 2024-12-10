const Comidas = require('../models/Comidas');

class ComidaService {
  async getAllComidas() {
    return await Comidas.findAll();
  }

  async getComidaById(id) {
    return await Comidas.findByPk(id);
  }

  async createComida(comidaData) {
    return await Comidas.create(comidaData);
  }

  async updateComida(id, comidaData) {
    await Comidas.update(comidaData, { where: { ComidaID: id } });
    return await Comidas.findByPk(id);
  }

  async deleteComida(id) {
    await Comidas.destroy({ where: { ComidaID: id } });
  }
}

module.exports = new ComidaService();
