'use strict';
const dontenv = require('dotenv').config();
const { db } = require('./lib/models');
const { app } = require('./lib/server');
const { start } = require('./lib/server');
const PORT = process.env.PORT;

db.sync().then(() => start(PORT));
