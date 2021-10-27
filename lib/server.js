'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Brings in Error Handlers
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

// Brings in Routes
const userRoutes = require('./routes/userRoutes');
const crudRoutes = require('./routes/crudRoutes'); // Need to combine and change file path

// Bring in Express
const app = express();

// App Level MiddleWare
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MW Logger Call
app.use(logger);

// Routes
app.use(crudRoutes);
app.use('/api/v1', userRoutes); // Using the routes.

// Error-Handler MW
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
	app,
	start: (port) => {
		if (!port) {
			throw new Error('Missing Port');
		}
		app.listen(port, () => console.log(`Listening on ${port}`));
	},
};
