const db = require('../db');
const { DataTypes } = require('sequelize');

const Workout = db.define('workout', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Workout;
