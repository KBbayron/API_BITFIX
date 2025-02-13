const {Perfil, perfilSchema} = require('./perfil.model');
const {Consultation, constationsSchema} = require('./consultations.model');
const {Device, devicesSchema} = require('./device.model');
const {Priority, prioritiesSchema} = require('./priority.model');
const {Repair, repairsSchema} = require('./repairs.model');
const {Rol, rolesSchema} = require('./rol.model');
const {Ticket, ticketsSchema} = require('./ticket.model');
const {User, usersSchema} = require('./user.model');

const models = [
  { model: Perfil, schema: perfilSchema },
  { model: Consultation, schema: constationsSchema },
  { model: Device, schema: devicesSchema },
  { model: Priority, schema: prioritiesSchema },
  { model: Repair, schema: repairsSchema },
  { model: Rol, schema: rolesSchema },
  { model: Ticket, schema: ticketsSchema },
  { model: User, schema: usersSchema }
];


module.exports = models;
