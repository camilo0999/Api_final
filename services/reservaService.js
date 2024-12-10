const Reservas = require('../models/Reservas');

class ReservaService {
  async getAllReservas() {
    return await Reservas.findAll();
  }

  async getReservasByClienteId(clienteId) {
    return await Reservas.findAll({ where: { ClienteID: clienteId } });
  }

  async getReservaById(id) {
    return await Reservas.findByPk(id);
  }

  async createReserva(reservaData) {
    return await Reservas.create(reservaData);
  }

  async updateReserva(id, reservaData) {
    await Reservas.update(reservaData, { where: { ReservaID: id } });
    return await Reservas.findByPk(id);
  }

  async deleteReserva(id) {
    await Reservas.destroy({ where: { ReservaID: id } });
  }
}

module.exports = new ReservaService();
