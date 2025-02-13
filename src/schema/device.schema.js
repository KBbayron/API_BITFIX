const Joi = require('joi');

const id = Joi.number().integer().positive();
const branch = Joi.string().max(25).required();
const model = Joi.string().max(25).required();
const type = Joi.string().max(20).required();
const description = Joi.string().max(255).required();
const userId = Joi.number().integer().positive().required();

const createDeviceSchema = Joi.object({
    branch: branch.required(),
    model: branch.required(),
    type: branch.required(),
    description,
    userId: userId.required(),
});

const updateDeviceSchema = Joi.object({
    branch,
    model,
    type,
    description,
    userId
});

const getDeviceSchema = Joi.object({
    id: id.required()
});

module.exports = { getDeviceSchema, createDeviceSchema, updateDeviceSchema };
