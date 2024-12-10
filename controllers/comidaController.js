const ComidaService = require('../services/comidaService');

class ComidaController {
  async getAllComidas(req, res) {
    const comidas = await ComidaService.getAllComidas();
    res.json(comidas);
  }

  async getComidaById(req, res) {
    const comida = await ComidaService.getComidaById(req.params.id);
    if (comida) {
      res.json(comida);
    } else {
      res.status(404).json({ message: 'Comida no encontrada' });
    }
  }

  async createComida(req, res) {
    const comida = await ComidaService.createComida(req.body);
    res.status(201).json(comida);
  }

  async updateComida(req, res) {
    const comida = await ComidaService.updateComida(req.params.id, req.body);
    res.json(comida);
  }

  async deleteComida(req, res) {
    await ComidaService.deleteComida(req.params.id);
    res.status(204).end();
  }
}

module.exports = new ComidaController();