import Sequelize from  'sequelize';
import db from '../config/db.js';

//definir modelo:
export const Usuarios = db.define('users', {
    user: {
        type: Sequelize.STRING
    },
    sex: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    group: {
        type: Sequelize.STRING
    },
});