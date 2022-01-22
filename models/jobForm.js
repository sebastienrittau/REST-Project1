const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../bin/www');

module.exports = (sequelize, Sequelize) => {
  const JobForm = sequelize.define("jobForm", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    additionalInfo: {
      type: DataTypes.STRING(550),
    },
    countryId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    provinceId: {
      type: Sequelize.UUID,
      allowNull: false
    },
    jobFormFileId: {
      type: Sequelize.UUID,
    }
  });

  return JobForm;
};




