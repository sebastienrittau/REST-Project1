const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../bin/www');

module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("country", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(2)
        }
    });

    return Country;
};




