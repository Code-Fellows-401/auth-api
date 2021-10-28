'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes.js');
const foodModel = require('./food.js');
const userModel = require('./users.js');
const Collection = require('../Data-Collection.js');
const secureRouter = require('../routes/secureRoutes.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);
const Clothes = clothesModel(sequelize, DataTypes);
const Food = foodModel(sequelize, DataTypes);

module.exports = {
	db: sequelize,
	food: new Collection(Food),
	clothes: new Collection(Clothes),
	Users: userModel(sequelize, DataTypes),
};
