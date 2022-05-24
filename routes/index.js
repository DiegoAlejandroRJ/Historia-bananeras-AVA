import express from 'express';
import {
    paginaIngreso, 
    paginaInicio, 
    paginaUnidad1, 
    paginaUnidad2, 
    paginaCuestionario1,
    paginaCuestionario1_2,
    paginaCuestionario1_3,
    paginaCuestionario2,
    paginaCuestionario2_2,
    paginaCuestionario2_3,
    paginaHerramientas
} from '../controllers/paginasController.js';
import {guardarRespuestas1} from '../controllers/respuestas1Controller.js';
import {permitirIngreso} from '../controllers/ingresoController.js';

const router = express.Router();  //usando el router
//a continuación se asignan las rutas al objeto del router

router.get('/', paginaIngreso);
router.post('/', permitirIngreso);

router.get('/inicio', paginaInicio );

router.get('/unidad1', paginaUnidad1);

router.get('/unidad2', paginaUnidad2);

router.get('/cuestionario1', paginaCuestionario1);
router.post('/cuestionario1', guardarRespuestas1);

router.get('/cuestionario1_2', paginaCuestionario1_2);
router.post('/cuestionario1_2', guardarRespuestas1);

router.get('/cuestionario1_3', paginaCuestionario1_3);
router.post('/cuestionario1_3', guardarRespuestas1);

router.get('/cuestionario2', paginaCuestionario2);
router.post('/cuestionario2', guardarRespuestas1);

router.get('/cuestionario2_2', paginaCuestionario2_2);
router.post('/cuestionario2_2', guardarRespuestas1);

router.get('/cuestionario2_3', paginaCuestionario2_3);
router.post('/cuestionario2_3', guardarRespuestas1);

router.get('/herramientas', paginaHerramientas);

export default router; 