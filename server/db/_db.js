var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5433/flashcards', { logging: false });

module.exports = db;