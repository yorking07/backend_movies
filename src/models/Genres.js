const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Genres = sequelize.define('genres', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Genres;