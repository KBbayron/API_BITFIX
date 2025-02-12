'use strict';

const { perfilSchema } = require('./perfil.model');
const { consultationsSchema } = require('./consultations.model');
const { devicesSchema } = require('./device.model');
const { prioritiesSchema } = require('./priority.model');
const { repairsSchema } = require('./repairs.model');
const { rolesSchema } = require('./rol.model');
const { ticketsSchema } = require('./ticket.model');
const { usersSchema } = require('./user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('perfiles', perfilSchema, { transaction });
      await queryInterface.createTable('consultations', consultationsSchema, { transaction });
      await queryInterface.createTable('devices', devicesSchema, { transaction });
      await queryInterface.createTable('priorities', prioritiesSchema, { transaction });
      await queryInterface.createTable('repairs', repairsSchema, { transaction });
      await queryInterface.createTable('roles', rolesSchema, { transaction });
      await queryInterface.createTable('tickets', ticketsSchema, { transaction });
      await queryInterface.createTable('users', usersSchema, { transaction });

      await transaction.commit(); // Confirma y guarda los cambios realizados
    } catch (error) {
      await transaction.rollback();// Revierte todos los cambios realizados
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('users', { transaction });
      await queryInterface.dropTable('tickets', { transaction });
      await queryInterface.dropTable('roles', { transaction });
      await queryInterface.dropTable('repairs', { transaction });
      await queryInterface.dropTable('priorities', { transaction });
      await queryInterface.dropTable('devices', { transaction });
      await queryInterface.dropTable('consultations', { transaction });
      await queryInterface.dropTable('perfiles', { transaction });

      await transaction.commit();// Revierte todos los cambios realizados
    } catch (error) {
      await transaction.rollback();// Revierte todos los cambios realizados
      throw error;
    }
  }
  
};