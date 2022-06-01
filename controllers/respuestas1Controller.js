import {Respuestas1} from '../models/Respuestas1.js';
import { usuarioLogged } from './ingresoController.js';

const guardarRespuestas1 = async (req, res) =>{

    //validar campos
    const {formValue, Q, P1, P2, P2a, P3} = req.body;
    
    const errores = [];
    (P1 ==='')&&errores.push({mensaje: 'Por favor seleccione una respuesta para la pregunta 1'});
    (P2 ==='')&&errores.push({mensaje: 'Por favor seleccione una respuesta para la pregunta 2'});  
    (P2a === '')&&errores.push({mensaje: 'Por favor seleccione una respuesta para la pregunta 2a'});
    (P3 ==='')&&errores.push({mensaje: 'Por favor seleccione una respuesta para la pregunta 3'});

    let newQ, backPressed;
    let respuestas = [];
    switch(Q){
        case '1': { backPressed= "unidad1"; break;}
        case '1_2': {newQ = '1'; backPressed= "unidad1"; break;}
        case '1_3': {newQ = '1_2'; backPressed= "unidad1"; break;}
        case '2': { backPressed= "unidad2"; break;}
        case '2_2': {newQ = '2'; backPressed= "unidad2"; break;}
        case '2_3': {newQ = '2_2'; backPressed= "unidad2"; break;}
    }
    
    if (errores.length > 0) {
        //mostrar la vista con errores
        try {
            respuestas = await Respuestas1.findAll({where:{user:usuarioLogged.user, Q:newQ}});
        } catch (error) {
            console.log(error);
        }

        res.render(formValue, {//'cuestionario1', {
            pagina: formValue,//'Cuestionario1',
            errores,
            usuarioLogged,
            P1,
            P2,
            P2a,
            P3,
            respuestas
        })
    } else {
        //Almacenar en base de datos. dame un sec

        try {
            await Respuestas1.create({
                user: usuarioLogged.user,
                Q,
                P1,
                P2,
                P2a,
                P3
            });
          
            res.redirect("/"+backPressed)
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    guardarRespuestas1
}