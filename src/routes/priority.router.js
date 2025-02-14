const { Router } = require('express');
const Service = require('../services/priority.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getPrioritySchema, createPrioritySchema, updatePrioritySchema } = require('../schema/priority.schema');

const path = 'priority';
const router = Router();
const service = new PriorityService();

router.get('/', async (req, res, next) => {
  try {
    const priorities = await service.findAll();
    res.status(200).json(priorities);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getPrioritySchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const priority = await service.findById(id);
    res.status(200).json(priority);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createPrioritySchema, 'body'), async (req, res, next) => {
  try {
    const newPriority = await service.create(req.body);
    res.status(201).json(newPriority);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getPrioritySchema, 'params'), validatorHandler(updatePrioritySchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPriority = await service.update(id, req.body);
    res.status(200).json(updatedPriority);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getPrioritySchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Prioridad eliminada' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path};
