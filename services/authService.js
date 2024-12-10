const jwt = require('jsonwebtoken');
const Cliente = require('../models/Cliente');

class AuthService {
  async login(correo, password) {
    const cliente = await Cliente.findOne({ where: { Correo: correo } });
    if (!cliente) {
      throw new Error('Cliente no encontrado');
    }
    
    if (cliente.Contraseña !== password) {
      throw new Error('Contraseña incorrecta');
    }
    
    const token = jwt.sign({ ClienteID: cliente.ClienteID, Correo: cliente.Correo }, 'secret_key', { expiresIn: '1h' });
    return { token };
  }
}

module.exports = new AuthService();
