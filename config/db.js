//este js tiene la configuración de la base de datos.
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path:"./variables.env"});

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {//, 'root', { 'avambananeras' ''
   host: process.env.BD_HOST,//process.env.BD_HOST,'127.0.0.1'
   //port: process.env.BD_PORT,//process.env.BD_PORT,'3306'
   dialect: 'mysql',
   define: {
       timestamps: false,
       freezeTableName:true
   },
   pool: {
       max: 5,
       min: 0,
       acquire: 30000,
       idle: 10000
   },
   operatorAliases: false
});

export default db;