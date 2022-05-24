import { Respuestas1 } from "../models/Respuestas1.js";
import { usuarioLogged } from "./ingresoController.js";
import { guardarRespuestas1 } from "./respuestas1Controller.js";

const paginaIngreso = (req, res)=>{ 
    res.render('ingreso', {
    });
}

const paginaInicio = (req, res)=>{ 
    res.render('inicio', {
        usuarioLogged
    });
}

const paginaUnidad1 = (req, res)=>{ 
    res.render('unidad1', {
        usuarioLogged
    });
}

const paginaUnidad2 = (req, res)=>{ 
    res.render('unidad2',{
        usuarioLogged
    });
}

const paginaCuestionario1 = (req, res)=>{ 
    res.render('cuestionario1',{
        usuarioLogged
    });
}

const paginaCuestionario1_2 = async (req, res)=>{ 

    try {
        const respuestas = await Respuestas1.findAll({where:{user:usuarioLogged.user, Q:"1"}});
        console.log(respuestas)
        res.render('cuestionario1_2',{
            respuestas

        });
    } catch (error) {
        console.log(error);
    }
    
}
//var arreglo = 1,2,3,4,5
//arrgelo 1 2
const paginaCuestionario1_3 = async (req, res)=>{ 
    try {
        const respuestas = await Respuestas1.findAll({where:{user:usuarioLogged.user, Q:"1_2"}});
        res.render('cuestionario1_3',{
            respuestas,
            usuarioLogged
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaCuestionario2 = (req, res)=>{ 
    res.render('cuestionario2',{
        usuarioLogged
    });
}

const paginaCuestionario2_2 = async (req, res)=>{
    try {
        const respuestas = await Respuestas1.findAll({where:{user:usuarioLogged.user, Q:"2"}});
        res.render('cuestionario2_2',{
            respuestas,
            usuarioLogged
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaCuestionario2_3 = async(req, res)=>{ 
    try {
        const respuestas = await Respuestas1.findAll({where:{user:usuarioLogged.user, Q: "2_2"}});
        res.render('cuestionario2_3',{
            respuestas,
            usuarioLogged
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaHerramientas = (req, res)=>{ 
    res.render('herramientas', {
    });
}
export {
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
}