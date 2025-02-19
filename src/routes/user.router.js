const { Router } = require('express');
const UserService = require('../services/perfil.service');
const { validatorHandler } = require('../middlewares/validator.hadler');
const { getUserSchema, createUserSchema, updateUserSchema } = require('../schema/perfil.schema');

const path = 'user';
const router = Router();
const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.findAll();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getUserSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findById(id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createUserSchema, 'body'), async (req, res, next) => {
  try {
    const newUser = await service.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await service.update(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getUserSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Usuario eliminado' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path};

