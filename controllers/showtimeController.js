const ShowtimeService = require('../services/showtimeService');

class ShowtimeController {
  async getAllShowtimes(req, res) {
    const showtimes = await ShowtimeService.getAllShowtimes();
    res.json(showtimes);
  }

  async getShowtimeById(req, res) {
    const showtime = await ShowtimeService.getShowtimeById(req.params.id);
    if (showtime) {
      res.json(showtime);
    } else {
      res.status(404).json({ message: 'Showtime no encontrado' });
    }
  }

  async createShowtime(req, res) {
    const showtime = await ShowtimeService.createShowtime(req.body);
    res.status(201).json(showtime);
  }

  async updateShowtime(req, res) {
    const showtime = await ShowtimeService.updateShowtime(req.params.id, req.body);
    res.json(showtime);
  }

  async deleteShowtime(req, res) {
    await ShowtimeService.deleteShowtime(req.params.id);
    res.status(204).end();
  }
}

module.exports = new ShowtimeController();
