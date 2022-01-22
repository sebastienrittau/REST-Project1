const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../bin/www');

module.exports = (sequelize, Sequelize) => {
    const JobFormFile = sequelize.define("jobFormFile", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        file: {
            type: DataTypes.BLOB,
            allowNull: false
        },
        fileType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return JobFormFile;
};




