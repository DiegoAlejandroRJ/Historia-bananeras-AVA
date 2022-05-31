import {Respuestas1} from '../models/Respuestas1.js';
import { usuarioLogged } from './ingresoController.js';

const guardarRespuestas1 = async (req, res) =>{

    //validar campos
    const {Q, P1, P2, P2a, P3} = req.body;
    
    const errores = [];
    (P1.trim()==='...')&&errores.push({mensaje: 'Por favor seleccione una opcion para la pregunta 1'});
    (P2.trim()==='...')&&errores.push({mensaje: 'Por favor seleccione una opcion para la pregunta 2'});
    (P3.trim()==='...')&&errores.push({mensaje: 'Por favor seleccione una opcion para la pregunta 3'});

    if (errores.length > 0) {
        //mostrar la vista con errores
        res.render('cuestionario1', {
            pagina: 'Cuestionario1',
            errores
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