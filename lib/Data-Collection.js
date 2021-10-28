'use strict';

// THIS IS THE STRETCH GOAL ...
// It takes in a schema in the constructor and uses that instead of every collection
// being the same and requiring their own schema. That's not very DRY!

class DataCollection {
	constructor(model) {
		this.model = model;
	}

	async get(id) {
		try {
			let records = null;
			if (id) {
				records = await this.model.fineOne({ where: { id } });
			} else {
				records = await this.model.findAll({});
			}
		} catch (err) {
			return err;
		}
	}

	async create(json) {
		try {
			let record = await this.model.create(json);
			return record;
		} catch (err) {
			return err;
		}
	}

	async update(id, json) {
		try {
			let record = await this.model.findOne({ where: { id } });
			let updatedRecord = await record.update(json);
			return updatedRecord;
		} catch (err) {
			return err;
		}
	}

	async delete(id) {
		try {
			await this.model.destroy({ where: { id } });
			let deleted = 'Deleted';
			return deleted;
		} catch (err) {
			return err;
		}
	}
}

module.exports = DataCollection;
