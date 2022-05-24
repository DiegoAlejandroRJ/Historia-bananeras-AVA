import Sequelize from  'sequelize';
import db from '../config/db.js';

//definir modelo:
export const Respuestas1 = db.define('questionary', {
    /*id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },*/
    user: {
        type: Sequelize.STRING
    },
    Q: {
        type: Sequelize.STRING
    },
    P1: {
        type: Sequelize.STRING
    },
    P2: {
        type: Sequelize.STRING
    },
    P2a: {
        type: Sequelize.STRING
    },
    P3: {
        type: Sequelize.STRING
    },
});

