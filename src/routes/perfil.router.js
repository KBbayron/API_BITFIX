const { Router } = require('express');
const PerfilService = require('../services/perfil.service');
const { validatorHandler } = require('../middlewares/validator.hadler');
const { getPerfilSchema, createPerfilSchema, updatePerfilSchema } = require('../schema/perfil.schema');

const path = 'perfil';
const router = Router();
const service = new PerfilService();

router.get('/', async (req, res, next) => {
  try {
    const perfiles = await service.findAll();
    res.status(200).json(perfiles);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getPerfilSchema, 'params'), 
async (req, res, next) => {
  try {
    const { id } = req.params;
    const perfil = await service.findById(id);
    res.status(200).json(perfil);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createPerfilSchema, 'body'), 
async (req, res, next) => {
  try {
    const newPerfil = await service.create(req.body);
    res.status(201).json(newPerfil);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getPerfilSchema, 'params'), 
validatorHandler(updatePerfilSchema, 'body'), 
async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPerfil = await service.update(id, req.body);
    res.status(200).json(updatedPerfil);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getPerfilSchema, 'params'), 
async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Perfil eliminado' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path };