const express = require('express');
const ShowtimeController = require('../controllers/showtimeController');
const router = express.Router();

router.get('/showtimes', ShowtimeController.getAllShowtimes);
router.get('/showtimes/:id', ShowtimeController.getShowtimeById);
router.post('/showtimes', ShowtimeController.createShowtime);
router.put('/showtimes/:id', ShowtimeController.updateShowtime);
router.delete('/showtimes/:id', ShowtimeController.deleteShowtime);

module.exports = router;
