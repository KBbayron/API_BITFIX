const perfilRouter = require('./perfil.router'); 
const deviceRouter = require('./device.router'); 
const priorityRouter = require('./priority.router'); 
const repairRouter = require('./repair.router'); 
const rol = require('./rol.router'); 
const ticketRouter = require('./ticket.router'); 
const userperfilRouter = require('./user.router');
// const deviceRouter = require('./');

module.exports = [
  perfilRouter,
  deviceRouter,
  priorityRouter,
  repairRouter,
  rol,
  ticketRouter,
  userperfilRouter
];