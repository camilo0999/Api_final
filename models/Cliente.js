const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Cliente = sequelize.define('Cliente', {
  ClienteID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  FechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  NumeroDocumento: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  timestamps: false
});

module.exports = Cliente;
