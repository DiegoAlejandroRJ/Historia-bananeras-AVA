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

    if (errores.length > 0) {
        //mostrar la vista con errores

        let newQ;
        let respuestas = [];
        switch(Q){
            case '1_2': {newQ = '1'; break;}
            case '1_3': {newQ = '1_2'; break;}
            case '2_2': {newQ = '2'; break;}
            case '2_3': {newQ = '2_2'; break;}
        }
        //listo san, favor prueba todo completo y me cuentas que encuentras...acá localmente?
        //sip, perdon
        //lo pruebas en local, si funciona, lo subes, le haces el push al heroku para que quede con los cambios, si quieres lo vuelves a probar para estar super seguros
        //me llamas si algo falla que voy aca hacer una tarea con vicky
        // <3 Tengo miedo. Valeeeee!
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

            res.redirect('/inicio') //a donde lo mando????

        } catch (error) {
            console.log(error)
        }
    }

}

export {
    guardarRespuestas1
}