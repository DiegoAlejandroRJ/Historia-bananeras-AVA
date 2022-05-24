import {Respuestas1} from '../models/Respuestas1.js';
import { usuarioLogged } from './ingresoController.js';

const guardarRespuestas1 = async (req, res) =>{

    //validar campos
    const {Q, P1, P2, P2a, P3} = req.body;
    
    const errores = [];
    //(correo.trim()==='')&&errores.push({mensaje: 'El correo está vacío'});

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