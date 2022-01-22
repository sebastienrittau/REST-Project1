const env = process.env.NODE_ENV || 'development';
const config = require('../config')[env];
const { Sequelize } = require('sequelize');

// Create a connection to the database
const sequelize = new Sequelize(config.database.db, config.database.user, config.database.password, {
    host: config.database.host,
    port: config.database.port,
    dialect: 'mariadb'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.country = require('./country')(sequelize, Sequelize);
db.province = require('./province')(sequelize, Sequelize);
db.jobForm = require('./jobForm')(sequelize, Sequelize);
db.jobFormFile = require('./jobFormFile')(sequelize, Sequelize);

module.exports = db;
