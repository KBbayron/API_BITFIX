const Joi = require('joi');

const id = Joi.number().integer().positive();
const repairId = Joi.number().integer().positive().required();
const solved = Joi.string().max(255).required();
const description = Joi.string().max(255).required();
const price = Joi.number().precision(2).required();

const createTicketSchema = Joi.object({
    repairId: repairId.required(),
    solved: solved.required(),
    description: description.required(),
    price: price.required()
});

const updateTicketSchema = Joi.object({
    repairId,
    solved,
    description,
    price
});

const getTicketSchema = Joi.object({
    id: id.required()
});

module.exports = { getTicketSchema, createTicketSchema, updateTicketSchema };
