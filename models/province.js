const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../bin/www');

module.exports = (sequelize, Sequelize) => {
    const Province = sequelize.define("province", {
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
        },
        countryId: {
            type: Sequelize.UUID,
            allowNull: false
        }
    });

    return Province;
};




