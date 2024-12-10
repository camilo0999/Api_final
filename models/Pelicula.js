const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Pelicula = sequelize.define('Pelicula', {
  PeliculaID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Duracion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Clasificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Estreno: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Imagenes: {
    type: DataTypes.STRING, // Puedes usar DataTypes.ARRAY(DataTypes.STRING) si necesitas almacenar múltiples URLs
    allowNull: true
  },
  Descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  LinkTrailer: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false
});

module.exports = Pelicula;

