const Joi = require('joi');

const id = Joi.number().integer().positive();
const name = Joi.string().max(15).required();
const lastName = Joi.string().max(15).required();
const email = Joi.string().email().max(50).required();
const phone = Joi.string().length(8).required();
const address = Joi.string().max(255);

const createPerfilSchema = Joi.object({ 
    name: name.required(), 
    lastName: lastName.required(), 
    email:email.required(), 
    phone:phone.required(),
    address:address.required() 
});

const updatePerfilSchema = Joi.object({ 
    name, 
    lastName, 
    email, 
    phone, 
    address });

const getPerfilSchema = Joi.object({ 
    id: id.required() 
});

module.exports = { getPerfilSchema, createPerfilSchema, updatePerfilSchema };