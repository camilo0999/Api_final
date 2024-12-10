const AuthService = require('../services/authService');

class AuthController {
  async login(req, res) {
    try {
      const { correo, password } = req.body;
      const token = await AuthService.login(correo, password);
      res.json(token);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
