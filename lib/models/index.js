'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const clothesModel = require('./clothes.js');
const foodModel = require('./food.js');
const userModel = require('./users.js');
// Stretch Goal to bring in a Collections
// const Collection = require('../Data-Collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
	db: sequelize,
	Food: foodModel(sequelize, DataTypes),
	Clothes: clothesModel(sequelize, DataTypes),
	Users: userModel(sequelize, DataTypes),
};
