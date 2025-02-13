const Joi = require('joi');

const id = Joi.number().integer().positive();
const name = Joi.string().max(20).required();
const description = Joi.string().max(255);
const createAd = Joi.date().default(Date.now);

const createRolSchema = Joi.object({
    name: name.required(),
    description: description.required(),
});

const updateRolSchema = Joi.object({
    name,
    description
});

const getRolSchema = Joi.object({
    id: id.required()
});

module.exports = { getRolSchema, createRolSchema, updateRolSchema };
