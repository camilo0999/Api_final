const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Cliente = require('./Cliente');
const Showtimes = require('./Showtimes');

const Reservas = sequelize.define('Reservas', {
  ReservaID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ClienteID: {
    type: DataTypes.INTEGER,
    references: {
      model: Cliente,
      key: 'ClienteID'
    }
  },
  ShowID: {
    type: DataTypes.INTEGER,
    references: {
      model: Showtimes,
      key: 'ShowID'
    }
  },
  FechaReserva: {
    type: DataTypes.DATE,
    allowNull: false
  },
  CantidadBoletos: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TotalPago: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  timestamps: false
});

Cliente.hasMany(Reservas, { foreignKey: 'ClienteID' });
Reservas.belongsTo(Cliente, { foreignKey: 'ClienteID' });

Showtimes.hasMany(Reservas, { foreignKey: 'ShowID' });
Reservas.belongsTo(Showtimes, { foreignKey: 'ShowID' });

module.exports = Reservas;
