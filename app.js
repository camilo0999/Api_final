const express = require('express');
const cors = require('cors'); // Importar el middleware cors
const sequelize = require('./database'); // Importar la configuración de la base de datos
const clienteRoutes = require('./routes/clienteRoutes');
const peliculaRoutes = require('./routes/peliculaRoutes');
const reservaRoutes = require('./routes/reservaRoutes');
const showtimeRoutes = require('./routes/showtimeRoutes');
const comidaRoutes = require('./routes/comidaRoutes');
const authRoutes = require('./routes/authRoutes');

// Crear una instancia de la aplicación Express
const app = express();
app.use(express.json()); // Middleware para parsear JSON

// Habilitar CORS para todas las rutas
app.use(cors());

// Sincronizar la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

// Usar las rutas definidas
app.use('/api', clienteRoutes);
app.use('/api', peliculaRoutes);
app.use('/api', reservaRoutes);
app.use('/api', showtimeRoutes);
app.use('/api', comidaRoutes);
app.use('/api', authRoutes);

// Configurar el puerto y poner en marcha el servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
