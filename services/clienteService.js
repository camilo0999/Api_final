const Cliente = require('../models/Cliente');

class ClienteService {
  async getAllClientes() {
    return await Cliente.findAll();
  }

  async getClienteById(id) {
    return await Cliente.findByPk(id);
  }

  async createCliente(clienteData) {
    return await Cliente.create(clienteData);
  }

  async updateCliente(id, clienteData) {
    await Cliente.update(clienteData, { where: { ClienteID: id } });
    return await Cliente.findByPk(id);
  }

  async deleteCliente(id) {
    await Cliente.destroy({ where: { ClienteID: id } });
  }
}

module.exports = new ClienteService();
