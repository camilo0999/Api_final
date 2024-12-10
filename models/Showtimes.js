const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Pelicula = require('./Pelicula');

const Showtimes = sequelize.define('Showtimes', {
  ShowID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Hora: {
    type: DataTypes.TIME,
    allowNull: false
  },
  Sala: {
    type: DataTypes.STRING,
    allowNull: false
  },
  BoletosDisponibles: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  PeliculaID: {
    type: DataTypes.INTEGER,
    references: {
      model: Pelicula,
      key: 'PeliculaID'
    }
  }
}, {
  timestamps: false
});

Pelicula.hasMany(Showtimes, { foreignKey: 'PeliculaID' });
Showtimes.belongsTo(Pelicula, { foreignKey: 'PeliculaID' });

module.exports = Showtimes;
