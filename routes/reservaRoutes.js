const express = require('express');
const ReservaController = require('../controllers/reservaController');
const router = express.Router();

router.get('/reservas', ReservaController.getAllReservas);
router.get('/reservas/cliente/:id', ReservaController.getReservasByClienteId);
router.get('/reservas/:id', ReservaController.getReservaById);
router.post('/reservas', ReservaController.createReserva);
router.put('/reservas/:id', ReservaController.updateReserva);
router.delete('/reservas/:id', ReservaController.deleteReserva);

module.exports = router;
