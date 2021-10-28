'use strict';

const express = require('express');
const secureRouter = express.Router();
const { Users } = require('../models/index');
const basicAuth = require('../middleware/basic');
const bearerAuth = require('../middleware/bearer');
const permissions = require('../middleware/acl');
const acl = require('../middleware/acl');
const {
	handleGetAll,
	handleGetOne,
	handleCreate,
	handleUpdate,
	handleDelete,
} = require('./crudRoutes');

secureRouter.param('model', (req, res, next) => {
	const modelName = req.params.model;
	if (dataModules[modelName]) {
		req.model = dataModules[modelName];
		next();
	} else {
		next('Invalid Model');
	}
});

// Get all request
secureRouter.get('/:model', bearerAuth, handleGetAll);

// Get one request
secureRouter.get('/:model/:id', bearerAuth, handleGetOne);

// Create
secureRouter.post('/:model', bearerAuth, acl, handleCreate);

// Update
secureRouter.put('/:model/:id', bearerAuth, acl, handleUpdate);

// Patch
secureRouter.patch('/:model/:id', bearerAuth, acl, handleUpdate);

// Delete
secureRouter.delete('/:model/:id', bearerAuth, acl, handleDelete);

module.exports = secureRouter;
