const Showtimes = require('../models/Showtimes');

class ShowtimeService {
  async getAllShowtimes() {
    return await Showtimes.findAll();
  }

  async getShowtimeById(id) {
    return await Showtimes.findByPk(id);
  }

  async createShowtime(showtimeData) {
    return await Showtimes.create(showtimeData);
  }

  async updateShowtime(id, showtimeData) {
    await Showtimes.update(showtimeData, { where: { ShowID: id } });
    return await Showtimes.findByPk(id);
  }

  async deleteShowtime(id) {
    await Showtimes.destroy({ where: { ShowID: id } });
  }
}

module.exports = new ShowtimeService();
