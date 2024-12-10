const ClienteService = require('../services/clienteService');

class ClienteController {
  async getAllClientes(req, res) {
    const clientes = await ClienteService.getAllClientes();
    res.json(clientes);
  }

  async getClienteById(req, res) {
    const cliente = await ClienteService.getClienteById(req.params.id);
    if (cliente) {
      res.json(cliente);
    } else {
      res.status(404).json({ message: 'Cliente no encontrado' });
    }
  }

  async createCliente(req, res) {
    const cliente = await ClienteService.createCliente(req.body);
    res.status(201).json(cliente);
  }

  async updateCliente(req, res) {
    const cliente = await ClienteService.updateCliente(req.params.id, req.body);
    res.json(cliente);
  }

  async deleteCliente(req, res) {
    await ClienteService.deleteCliente(req.params.id);
    res.status(204).end();
  }
}

module.exports = new ClienteController();
