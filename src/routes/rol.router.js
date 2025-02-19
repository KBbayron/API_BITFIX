const { Router } = require('express');
const RolService = require('../services/rol.service');
const { validatorHandler } = require('../middlewares/validator.hadler');
const { getRolSchema, createRolSchema, updateRolSchema } = require('../schema/rol.schema');

const path = 'rol';
const router = Router();
const service = new RolService();

router.get('/', async (req, res, next) => {
  try {
    const roles = await service.findAll();
    res.status(200).json(roles);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getRolSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const rol = await service.findById(id);
    res.status(200).json(rol);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createRolSchema, 'body'), async (req, res, next) => {
  try {
    const newRol = await service.create(req.body);
    res.status(201).json(newRol);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getRolSchema, 'params'), validatorHandler(updateRolSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedRol = await service.update(id, req.body);
    res.status(200).json(updatedRol);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getRolSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Rol eliminado' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path };
