const ReservaService = require('../services/reservaService');

class ReservaController {
  async getAllReservas(req, res) {
    const reservas = await ReservaService.getAllReservas();
    res.json(reservas);
  }

  async getReservasByClienteId(req, res) {
    const reservas = await ReservaService.getReservasByClienteId(req.params.id);
    res.json(reservas);
  }

  async getReservaById(req, res) {
    const reserva = await ReservaService.getReservaById(req.params.id);
    if (reserva) {
      res.json(reserva);
    } else {
      res.status(404).json({ message: 'Reserva no encontrada' });
    }
  }

  async createReserva(req, res) {
    const reserva = await ReservaService.createReserva(req.body);
    res.status(201).json(reserva);
  }

  async updateReserva(req, res) {
    const reserva = await ReservaService.updateReserva(req.params.id, req.body);
    res.json(reserva);
  }

  async deleteReserva(req, res) {
    await ReservaService.deleteReserva(req.params.id);
    res.status(204).end();
  }
}

module.exports = new ReservaController();
