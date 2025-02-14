const { Router } = require('express');
const Service = require('../services/device.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getDeviceSchema, createDeviceSchema, updateDeviceSchema } = require('../schema/device.schema');

const path = 'device';
const router = Router();
const service = new DeviceService();

router.get('/', async (req, res, next) => {
  try {
    const devices = await service.findAll();
    res.status(200).json(devices);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getDeviceSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const device = await service.findById(id);
    res.status(200).json(device);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createDeviceSchema, 'body'), async (req, res, next) => {
  try {
    const newDevice = await service.create(req.body);
    res.status(201).json(newDevice);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getDeviceSchema, 'params'), validatorHandler(updateDeviceSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedDevice = await service.update(id, req.body);
    res.status(200).json(updatedDevice);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getDeviceSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Dispositivo eliminado' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path};
