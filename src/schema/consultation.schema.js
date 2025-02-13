const Joi = require('joi');

const id = Joi.number().integer().positive();
const transmiter = Joi.number().integer().positive().required();
const recivier = Joi.number().integer().positive().required();
const createAd = Joi.date().default(Date.now);
const messaje = Joi.string().max(255);

const createConsultationSchema = Joi.object({
    transmiter: transmiter.required(),
    recivier: recivier.required(),
    messaje: mesaje.required()
});

const updateConsultationSchema = Joi.object({
    transmiter,
    recivier,
    messaje
});

const getConsultationSchema = Joi.object({
    id: id.required()
});

module.exports = { getConsultationSchema, createConsultationSchema, updateConsultationSchema };
