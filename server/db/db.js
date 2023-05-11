const Sequelize = require('sequelize');

const config = {
    logging: false,
};

const db = new Sequelize(
    process.env.DATABASE_URL || 'postgres://localhost/beastmode',
    config
);

module.exports = db;
