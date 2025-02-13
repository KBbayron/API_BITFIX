const Joi = require('joi');

const id = Joi.number().integer().positive();
const deviceId = Joi.number().integer().positive().required();
const total = Joi.number().precision(2);
const createAd = Joi.date().default(Date.now);
const priorityId = Joi.number().integer().positive().required();

const createRepairSchema = Joi.object({
    deviceId: deviceId.required(),
    total: total.required(),
    priorityId: priorityId.required()
});

const updateRepairSchema = Joi.object({
    deviceId,
    total,
    priorityId
});

const getRepairSchema = Joi.object({
    id: id.required()
});

module.exports = { getRepairSchema, createRepairSchema, updateRepairSchema };
