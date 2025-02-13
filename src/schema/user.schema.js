const Joi = require('joi');

const id = Joi.number().integer().positive();
const perfilId = Joi.number().integer().positive().required();
const rolId = Joi.number().integer().positive().allow(null);
const user = Joi.string().max(15).required();
const password = Joi.string().max(50).required();
const createAd = Joi.date().default(Date.now);

const createUserSchema = Joi.object({
    perfilId: perfilId.required(), 
    rolId: rolId.required(), 
    user: user.required(), 
    password: password.required(), 
});

const updateUserSchema = Joi.object({
    perfilId,
    rolId,
    user,
    password
});

const getUserSchema = Joi.object({
    id: id.required()
});

module.exports = { getUserSchema, createUserSchema, updateUserSchema };
