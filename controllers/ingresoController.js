import {Usuarios} from '../models/Users.js';

var usuarioLogged = new Object();

const permitirIngreso = async (req, res) =>{
    //validar campos
    const datosFormulario = req.body;
   console.log("tipo" + typeof req.body)
    const errores = [];
    (datosFormulario.correo.trim()==='')&&errores.push({mensaje: 'El correo está vacío'});
        if (errores.length > 0) {
        //mostrar la vista con errores
        res.render('ingreso', {
            errores
        })
    } else {
      
        try {
           const consultaEnDB = await Usuarios.findOne({where:{user:datosFormulario.correo}}); 
           console.log("consulta en BD user: " + typeof consultaEnDB)
           usuarioLogged = consultaEnDB
           if(consultaEnDB != null)
           {
                //encontro el nombre en el correo
                res.render('inicio', {
                    usuarioLogged,
                });
           }
           else{
               const correoIngresado = datosFormulario.correo;
             errores.push({mensaje: 'El correo ingresado es incorrecto'});
             res.render('ingreso', {
                pagina: 'ingreso',
                errores,
                correoIngresado
            })
           }
        } catch (error) {
            console.log(error)
        }  
    }
}

export {
    permitirIngreso,
    usuarioLogged,
}