console.log("Ingresó a user.controllers.js");
const User = require("../models/user.model.js");
let arreglo = require("../public/js/validaciones.js")
let array = arreglo.registros;

console.log(array,"Please");


//console.log("user.controller.js importado ",arreglo.contrasena);
//Crea y guarda un nuevo usuario
exports.create = (req, res) =>{
    //Se valida la peticion
    if(!req.body){
        res.status(400).send({
            message: "No se puede ingresar dados en blanco!"
        })
    }

    //Crea el usuario
    const user = new User({
        usuario: array[1],
        contrasena: "asdfgh",
        edad: parseInt("54")    
    });

    

    //Guarda el usuario en la base de datos

    User.create(user,(err, data) => {
        console.log("Guarda Usuario")
        console.log(user.contrasena)
        console.log(user.usuario)
        if(err)
            res.status(500).send({
                messagew:
                err.message || "Ha ocurrido un error mientras de almacenaba el usuario."
            });
        else res.send(data)
    });

};

//Consulta todos los usuarios de la base de datos
exports.findAll = (req, res) =>{
    User.getAll((err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving customers."
        });
        else res.send(data);
    });
};

//Consulta un usuario por el Id
exports.findOne = (req, res) =>{

};

//Actualiza un usuario identificandolo por su Id
exports.update = (req, res) =>{

};

// Elimina un usuario con un Id espeficio
exports.delete = (req, res) =>{

};

//Elimina todo los usuario de la tabla
exports.deleteAll = (req, res) =>{

};

