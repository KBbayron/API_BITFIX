const { Router } = require('express');
const ConsultationService = require('../services/consultation.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getConsultationSchema, createConsultationSchema, updateConsultationSchema } = require('../schema/consultation.schema');

const pathConsultations = 'consultations';
const routerConsultations = Router();
const serviceConsultations = new ConsultationService();

routerConsultations.get('/', async (req, res, next) => {
  try {
    const consultations = await serviceConsultations.findAll();
    res.status(200).json(consultations);
  } catch (error) {
    next(error);
  }
});

routerConsultations.get('/:id', validatorHandler(getConsultationSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const consultation = await serviceConsultations.findById(id);
    res.status(200).json(consultation);
  } catch (error) {
    next(error);
  }
});

routerConsultations.post('/', validatorHandler(createConsultationSchema, 'body'), async (req, res, next) => {
  try {
    const newConsultation = await serviceConsultations.create(req.body);
    res.status(201).json(newConsultation);
  } catch (error) {
    next(error);
  }
});

routerConsultations.patch('/:id', validatorHandler(getConsultationSchema, 'params'), validatorHandler(updateConsultationSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedConsultation = await serviceConsultations.update(id, req.body);
    res.status(200).json(updatedConsultation);
  } catch (error) {
    next(error);
  }
});

routerConsultations.delete('/:id', validatorHandler(getConsultationSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await serviceConsultations.delete(id);
    res.status(200).json({ message: 'Consulta eliminada' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router: routerConsultations, path: pathConsultations };
