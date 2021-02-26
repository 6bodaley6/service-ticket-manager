const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Ticket model
class Ticket extends Model { }

// Create fields/columns for Ticket model
Ticket.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'department',
                key: 'id'
            }
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'status',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'ticket'
    }
);

module.exports = Ticket;