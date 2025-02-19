const { Router } = require('express');
const RepairService = require('../services/repair.service');
const { validatorHandler } = require('../middlewares/validator.hadler');
const { getRepairSchema, createRepairSchema, updateRepairSchema } = require('../schema/repair.schema');

const path = 'repair';
const router = Router();
const service = new RepairService();

router.get('/', async (req, res, next) => {
  try {
    const repairs = await service.findAll();
    res.status(200).json(repairs);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getRepairSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const repair = await service.findById(id);
    res.status(200).json(repair);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createRepairSchema, 'body'), async (req, res, next) => {
  try {
    const newRepair = await service.create(req.body);
    res.status(201).json(newRepair);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getRepairSchema, 'params'), validatorHandler(updateRepairSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPriority = await service.update(id, req.body);
    res.status(200).json(updatedPriority);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getRepairSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Reparacion eliminada' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path};
