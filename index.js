import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();  //funcion para ejecutar express


//Conectar la base de datos 
db.authenticate()
    .then( () => console.log('Base de datos conectada'))
    .catch(error=> console.log('error'));


//Definir puerto 
const port= process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

//Definir la carpeta public
app.use(express.static('public'));

//agregar router al app
app.use('/', router);

app.listen(port,()=> {
    console.log(`el servidor está funcionando en el puerto ${port}`)
})