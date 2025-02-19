const { Router } = require('express');
const TicketService = require('../services/ticket.service');
const { validatorHandler } = require('../middlewares/validator.hadler');
const { getTicketSchema, createTicketSchema, updateTicketSchema } = require('../schema/ticket.schema');

const path = 'ticket';
const router = Router();
const service = new TicketService();

router.get('/', async (req, res, next) => {
  try {
    const tickets = await service.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getTicketSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const ticket = await service.findById(id);
    res.status(200).json(ticket);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createTicketSchema, 'body'), async (req, res, next) => {
  try {
    const newTicket = await service.create(req.body);
    res.status(201).json(newTicket);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', validatorHandler(getTicketSchema, 'params'), validatorHandler(updateTicketSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTicket = await service.update(id, req.body);
    res.status(200).json(updatedTicket);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', validatorHandler(getTicketSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({ message: 'Ticket eliminado' });
  } catch (error) {
    next(error);
  }
});

module.exports = { router, path};

